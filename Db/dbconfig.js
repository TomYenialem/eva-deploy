const mysql = require("mysql2");
require("dotenv").config(); // Ensure dotenv is loaded first

// Create a connection pool with the provided details
const dbConnection = mysql.createPool({
  // host: process.env.HOST, // Database host (IP or hostname)
  // user: process.env.USER, // Username for the database
  // password: process.env.PASSWORD, // Password for the database
  // database: process.env.DATABASE, // Database name
  // connectTimeout: 10000, // Timeout for connection (in ms)

  user: "freedb_temesgen",
  database: "freedb_evangadi",
  host: "sql.freedb.tech",
  password: "Z??dskcGu4fCwe2",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000,
});

// Use promises to handle queries
module.exports = dbConnection.promise();
