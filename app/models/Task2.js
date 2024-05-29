const { DataTypes } = require('sequelize')
const { sequelize } = require('../core/sequelize');

const Task2 = sequelize.define('Task2', {
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  done: {
    type: DataTypes.BOOLEAN,
  },
})

module.exports = Task2
