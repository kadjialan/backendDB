const User = require("../database/users");
const uuid = require("uuid");
const bcrypt = require("bcrypt");

const getAll = async (req, res) => {
  const drinks = await User.findAll();
  res.json(drinks);
};

const postUser = async (req, res) => {
  const { firstName, lastName, emailAddress, phone, password, admin } =
    req.body;
  bcrypt.hash(password, 5, async function (err, hash) {
    if (err) {
      res.status(500).send("wrong validat");
    } else {
      const user = await User.create({
        firstName,
        lastName,
        emailAddress,
        phone,
        apikey: uuid.v4(),
        password: hash,
        admin,
      });
      res.json(user);
    }
  });
};

const getUser = async (req, res) => {
  const drink = await User.findByPk(req.params.id);
  res.send(drink);
};

const putUser = async function (req, res) {
  const { firstName, lastName, emailAddress, phone, password, admin } =
    req.body;
  if (firstName && lastName && emailAddress && phone && password && admin) {
    await User.update(req.body, { where: { id: req.params.id } });
    const drink = await User.findByPk(req.params.id);
    res.send(drink);
  }
};

const patchUser = async function (req, res) {
  await User.update(req.body, { where: { id: req.params.id } });
  const drink = await User.findByPk(req.params.id);
  res.send(drink);
};

const deleteUser = async function (req, res) {
  await drink.destroy({ where: { id: req.params.id } });
  res.send("success");
};

module.exports = { getAll, postUser, getUser, putUser, patchUser, deleteUser };
