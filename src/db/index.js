const Sequelize = require('sequelize');
const CONFIG = require('../config');

const db = {};

const sequelize = new Sequelize(
  process.env.DB_NAME || CONFIG.DB_NAME,
  process.env.DB_USERNAME || CONFIG.DB_USERNAME,
  process.env.DB_PASSWORD || CONFIG.DB_PASSWORD,
  {
    host: process.env.DB_HOST || CONFIG.DB_HOST,
    port: process.env.DB_PORT || CONFIG.DB_PORT,
    dialect: process.env.DB_DIALECT || CONFIG.DB_DIALECT,
    logging: process.env.DB_LOGGING || CONFIG.DB_LOGGING !== true ? console.info : false,
    benchmark: true,
    pool: {
      max: process.env.DB_POOL_MAX || CONFIG.DB_POOL_MAX,
      min: process.env.DB_POOL_MIN || CONFIG.DB_POOL_MIN,
      idle: process.env.DB_CONNECTION_IDLE || CONFIG.DB_CONNECTION_IDLE,
    },
  },
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
