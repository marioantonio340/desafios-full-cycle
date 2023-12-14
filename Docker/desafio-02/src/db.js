const { Sequelize } = require("sequelize"); 
const port = '3306'

const dbName = 'people';
const dbUser = 'root';
const dbHost = 'host.docker.internal';
const dbPassword = 'password';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: 'mysql', 
  host: dbHost,
  port: port 
});

module.exports = sequelize;
