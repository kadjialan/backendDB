const {Sequelize} = require('sequelize')


const sequelize = new Sequelize('drink_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;