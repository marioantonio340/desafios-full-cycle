const { Sequelize } = require("sequelize"); 

const dbName = 'peaple';
const dbUser = 'root';
const dbHost = 'localhost:3306';
const dbPassword = 'password';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql", 
  host: dbHost, 
});

module.exports = sequelize;
