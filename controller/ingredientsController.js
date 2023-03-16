const Ingredient = require("../database/ingredient");

const getAllIngredients = async function (req, res) {
  const ingr = await Ingredient.findAll();
  res.send(ingr);
};

const getIngredient = async function (req, res) {
  const ingr = await Ingredient.findByPk(req.params.id);
  res.send(ingr);
};

const postIngredients = async function (req, res) {
  const { name, description } = req.body;
  const ingr = await Ingredient.create({
    name,
    description,
  });
  res.send(ingr);
};

const putIngredient = async function (req, res) {
  const { name, description } = req.body;
  if ((name, description)) {
    await Ingredient.update(req.body, { where: { id: req.params.id } });
    const ink = await Ingredient.findByPk(req.params.id);
    res.send(ink);
  }
};

const patchIngredients = async function (req, res) {
  await Ingredient.update(req.body, { where: { id: req.params.id } });
  const ingr = await Ingredient.findByPk(req.params.id);
  res.send(ingr);
};

const deleteIngredients = async function (req, res) {
  await Ingredient.destroy({ where: { id: req.params.id } });
  res.send("success");
};

module.exports = {
  getAllIngredients,
  getIngredient,
  postIngredients,
  putIngredient,
  patchIngredients,
  deleteIngredients
};
