const { DataTypes } = require("sequelize");
const sequelize = require(".");

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    emailAddress: {
      type: DataTypes.STRING,
      unique: true,
    },
    phone: DataTypes.STRING,
    apikey: DataTypes.STRING,
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = User;
