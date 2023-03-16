const { DataTypes } = require("sequelize");
const sequelize = require(".");

const Drink = sequelize.define(
  "drink",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    recipe: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    ingredient_id: DataTypes.INTEGER,
    glass_id: DataTypes.INTEGER,
    alcoholic:DataTypes.BOOLEAN,
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = Drink;