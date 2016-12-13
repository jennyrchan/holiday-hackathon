const Sequelize = require('sequelize')
const db = require('../index.js')

const Donator = db.define('Donator', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Donator;
