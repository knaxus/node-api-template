const mongoose = require('mongoose');
const CONFIG = require('../config');

mongoose.Promise = global.Promise;

// const MONGODB_URI = `mongodb://${username}:${password}@${host}:${port}/${databaseName}`;

// console.log(MONGODB_URI);
const options = {
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  useNewUrlParser: true,
};

mongoose.connect(CONFIG.MONGODB_URI, options);

// mongoose.connect(CONFIG.MONGODB_URI, {
//   auth: {
//     user: username,
//     password: password
//   },
//   options,
// });

mongoose.connection.on('connected', () => {
  // eslint-disable-next-line no-console
  console.info('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.error('MongoDB connection error:', err);
  process.exit(-1);
});

mongoose.connection.on('disconnected', () => {
  // eslint-disable-next-line no-console
  console.error('MongoDB disconnected');
});

module.exports = mongoose;
