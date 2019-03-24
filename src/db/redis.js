const redis = require('redis');
const { logger } = require('../utils');

// connect to Redis
const { REDIS_URL } = process.env;
const client = redis.createClient(REDIS_URL);

client.on('connect', () => {
  logger.info('Connected to REDIS');
});

client.on('error', (err) => {
  logger.error(`Error connecting REDIS: ${err}`);
});

module.exports = client;
