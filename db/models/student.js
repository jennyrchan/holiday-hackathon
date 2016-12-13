const Sequelize = require('sequelize')
const db = require('../index.js')

const columns = {
 name: {
   type: Sequelize.STRING,
   allowNull: false,
 },
 fulfilled: {
   type: Sequelize.BOOLEAN,
   defaultValue: false
 }
};

const Student = db.define('student', columns);

module.exports = Student;
