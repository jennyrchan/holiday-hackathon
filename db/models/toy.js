const Sequelize = require('sequelize')
const db = require('../index.js')

const Toy = db.define('toy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  url: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  }
});

module.exports = Toy;
