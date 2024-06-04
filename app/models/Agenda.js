const { DataTypes } = require('sequelize')
const { sequelize } = require('../core/sequelize')

const Agenda = sequelize.define("Agenda", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING(11),
  },
  email: {
    type: DataTypes.STRING,
  },
  road: {
    type: DataTypes.STRING,
  },
  number: {
    type: DataTypes.INTEGER,
  },
  neighborhood: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING(2),
  },
  cep: {
    type: DataTypes.STRING(8),
  },
  complement: {
    type: DataTypes.STRING
  }
});

module.exports = Agenda