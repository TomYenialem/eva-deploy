const mysql = require("mysql2");
require("dotenv").config(); // Ensure dotenv is loaded first

// Create a connection pool with the provided details
const dbConnection = mysql.createPool({
  host:
    process.env.HOST || "bvqxsbt6n6b1m0fjyywt-mysql.services.clever-cloud.com", // Database host (IP or hostname)
  user: process.env.USER || "u3vyjzrmrmloszul", // Username for the database
  password: process.env.PASSWORD || "j7tAQm8Kee3mAvlDPCF1", // Password for the database
  database: process.env.DATABASE || "bvqxsbt6n6b1m0fjyywt", // Database name
  waitForConnections: true, // Allows multiple connections in the pool
  connectionLimit: 10, // Max number of connections in the pool
  queueLimit: 0, // Unlimited queue size for pending connections
  connectTimeout: 10000, // Timeout for connection (in ms)
  port: process.env.DB_PORT || 3306, // Port for MySQL
});

// Use promises to handle queries
module.exports = dbConnection.promise();
