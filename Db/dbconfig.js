const mysql = require("mysql2");
require("dotenv").config();

// Create a MySQL connection pool using the environment variables
const dbConnection = mysql.createPool({
  user: process.env.USER, // Use the user defined in the .env file
  password: process.env.PASSWORD, // Use the password defined in the .env file
  database: process.env.DATABASE, // Use the database defined in the .env file
  host: process.env.DB_HOST, // Use the host defined in the .env file
  port: process.env.DB_PORT || 3306, // MySQL port (default is 3306)
});

// Export the connection pool as a promise-based API
module.exports = dbConnection.promise();
