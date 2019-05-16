require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'movie',
    database: process.env.DB_DATABASE || 'database',
    host: process.env.DB_HOSTNAME || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
  },
};
