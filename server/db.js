const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:7990ddc8f06d4325a4e16e129363da73@localhost:5432/eleven-journal');

module.exports = sequelize;