const Sequelize = require('sequelize')
const db = require('../index.js')

const School = db.define('school', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  address: {
    type: Sequelize.TEXT,
    defaultValue: false
  }
});

module.exports = School;
