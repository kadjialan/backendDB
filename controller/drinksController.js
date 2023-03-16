const Drink = require("../database/drink");

const getAllDrinks = async (req, res) => {
  const drinks = await Drink.findAll();
  res.json(drinks);
};

const postDrinks = async (req, res) => {
  const { name, description, imageUrl, recipe } = req.body;
  const drink = await Drink.create({
    name,
    description,
    imageUrl,
    recipe,
  });
  res.json(drink);
};

const getDrinks = async (req, res) => {
  const drink = await Drink.findByPk(req.params.id);
  res.send(drink);
};

const putDrinks = async function (req, res) {
  const { name, description, imageUrl, recipe } = req.body;
  if (name && description && imageUrl && recipe) {
    await Drink.update(req.body, { where: { id: req.params.id } });
    const drink = await Drink.findByPk(req.params.id);
    res.send(drink);
  }
};

const patchDrinks = async function (req, res) {
  await Drink.update(req.body, { where: { id: req.params.id } });
  const drink = await Drink.findByPk(req.params.id);
  res.send(drink);
};

const deleteDrinks = async function (req, res) {
  await Drink.destroy({ where: { id: req.params.id } });
  res.send("success");
};

module.exports = {
  getAllDrinks,
  postDrinks,
  getDrinks,
  putDrinks,
  patchDrinks,
  deleteDrinks
};
