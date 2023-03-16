const Category = require("../database/category");

const getAllCategories = async function (req, res) {
  const category = await Category.findAll();
  res.send(category);
};

const getCategory = async function (req, res) {
  const cate = await Category.findByPk(req.params.id);
  res.send(cate);
};

const postCategories = async function (req, res) {
    const { name, description } = req.body;
    const ingr = await Category.create({
      name,
      description,
    });
    res.send(ingr);
  };

const putCategory = async function (req, res) {
  const { name, description } = req.body;
  if ((name, description)) {
    await Category.update(req.body, { where: { id: req.params.id } });
    const cate = await Category.findByPk(req.params.id);
    res.send(cate);
  }
};

const patchCategories = async function (req, res) {
  await Category.update(req.body, { where: { id: req.params.id } });
  const cate = await Category.findByPk(req.params.id);
  res.send(cate);
};

const deleteCategory =  async function (req, res) {
    await Category.destroy({ where: { id: req.params.id } });
    res.send("success");
  };

module.exports = {
  getAllCategories,
  getCategory,
  postCategories,
  putCategory,
  patchCategories,
  deleteCategory,
};
