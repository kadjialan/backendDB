const Glass = require("../database/glass");

const getAllGlasses = async function (req, res) {
  const ingr = await Glass.findAll();
  res.send(ingr);
};

const getGlass = async function (req, res) {
  const users = await Glass.findByPk(req.params.id);
  res.send(users);
};

const postGlasses = async function (req, res) {
  const { name } = req.body;
  const user = await Glass.create({
    name,
  });
  res.send(user);
};

const putGlasses = async function (req, res) {
  const { name } = req.body;
  if (name) {
    await Glass.update(req.body, { where: { id: req.params.id } });
    const drink = await Glass.findByPk(req.params.id);
    res.send(drink);
  }
};

const patchGlasses = async function (req, res) {
  await Glass.update(req.body, { where: { id: req.params.id } });
  const drink = await Glass.findByPk(req.params.id);
  res.send(drink);
};

const deleteGlasses = async function (req, res) {
  await Glass.destroy({ where: { id: req.params.id } });
  res.send("success");
};

module.exports = {
  getAllGlasses,
  getGlass,
  postGlasses,
  putGlasses,
  patchGlasses,
  deleteGlasses,
};
