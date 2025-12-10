const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Listener to confirm connection
pool.on('connect', () => {
    console.log('✅ Connected to PostgreSQL Database!');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};