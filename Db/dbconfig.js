const { Pool } = require("pg");
require("dotenv").config();

// Create a PostgreSQL connection pool using the external connection string
const dbConnection = new Pool({
  connectionString: process.env.DATABASE_URL, // Database URL from Render
  ssl: {
    rejectUnauthorized: false, // Needed for remote connections like Render
  },
});

// Export the connection pool
module.exports = dbConnection;
