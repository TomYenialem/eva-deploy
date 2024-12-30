const mysql = require("mysql2");
require("dotenv").config();
const dbConnecttion = mysql.createPool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: "localhost",
  port: process.env.DB_PORT || 3306,
});

module.exports = dbConnecttion.promise();
