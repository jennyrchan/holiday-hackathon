'use strict'
const debug = require('debug')('sql')
const chalk = require('chalk')
const Sequelize = require('sequelize')


const url = process.env.DATABASE_URL || 'postgres://localhost:5432/toy_deploy'

console.log(chalk.yellow(`Opening database connection to ${url}`));

// create the database instance
const db = module.exports = new Sequelize(url, {
  logging: debug, // export DEBUG=sql in the environment to get SQL queries
  native: true,   // lets Sequelize know we can use pg-native for ~30% more speed
  define: {
    underscored: true,       // use snake_case rather than camelCase column names
    freezeTableName: true,   // don't change table names from the one specified
    timestamps: true,        // automatically include timestamp columns
  }
})

// pull in our models
const Donator = require('./models/donator')
const School = require('./models/school')
const Toy = require('./models/toy')
const User = require('./models/user')
const Student = require('./models/student')

Student.belongsTo(School);
School.hasMany(Student);
Student.belongsTo(Donator);
Student.belongsTo(User);
Student.belongsTo(Toy);
School.belongsTo(User);
Donator.belongsTo(User);

// sync the db, creating it if necessary
function sync() {
  return db.sync({force: true})
    .then(ok => console.log(`Synced models to db ${url}`))
    .catch(fail => {
      console.log(fail)
    })
}

db.didSync = sync()
