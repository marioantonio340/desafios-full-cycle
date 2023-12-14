const { Sequelize } = require("sequelize"); 

const dbName = 'people';
const dbUser = 'root';
const dbHost =  'host.docker.internal';
const port  = '3306';
const dbPassword = 'password';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql", 
  host: dbHost,
  port: port
});

module.exports = sequelize;