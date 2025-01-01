const mysql = require("mysql2");
require("dotenv").config();

// Create a connection pool with the provided details
const dbConnection = mysql.createPool({
  host: process.env.HOST, // sql12.freesqldatabase.com
  user: process.env.USER, // sql12755098
  password: process.env.PASSWORD, // 4c8aVfSdLC
  database: process.env.DATABASE, // sql12755098
  // Default port for MySQL
  connectTimeout: 10000, // Timeout in milliseconds (10 seconds)
});

// Use promises to work with the connection
module.exports = dbConnection.promise();
