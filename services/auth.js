const User = require("../database/users");
const { verifyToken } = require("./jwt");

const authMiddleware = async (req, res, next) => {
  const authorization = req.get("Authorization");
  const token = authorization?.split(" ").pop();

  if (token) {
    try {
      const { data } = verifyToken(token);
      const user = await User.findByPk(data.id);
      if (!user) return res.sendStatus(401);
      req.user = user;
      next();
    } catch (e) {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
};

const authorizeByApiKey = async (req, res, next) => {
  const apikey = req.user.apikey
  if(!apikey){
    return res.sendStatus(401)
  }
  const user = await User.findOne({where: {apikey: apikey}})
  if(!user){
    return res.sendStatus(401)
  } else {
    req.user = user;
    next();
  }
};

const authorizeByIsAdmin = (req, res, next) => {
const admin = (req.user.admin == 1)
console.log(admin)
if(!admin){
  return res.sendStatus(401)
}
else {
  next();
}
}

module.exports = { authMiddleware, authorizeByApiKey, authorizeByIsAdmin};
