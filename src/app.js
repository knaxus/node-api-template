const express = require('express');
const requestValidator = require('express-validator');
const cors = require('cors');
const logger = require('morgan');
const dotenv = require('dotenv');

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

// Let the config load
const { MySQL } = require('./db');
require('./db/mongodb');

// custom modules
const allRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.disable('x-powered-by');
app.use(
  logger('dev', {
    skip: () => app.get('env') === 'test',
  }),
);
app.use(requestValidator());

app.get('/', (req, res) => {
  res.status(200).json({
    msg: 'Welcome to User Management Services',
  });
});

MySQL.sequelize
  .sync()
  .then(() => {
    const { PORT } = process.env;
    app.listen(PORT, () => console.log(`App running at http://localhost:${PORT}`));
  })
  .catch(err => console.error(err));

app.use(allRoutes);

module.exports = app;
