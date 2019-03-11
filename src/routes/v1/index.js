const allRoutes = require('express').Router();
const userRoutes = require('../../modules/users/users.routes');

allRoutes.use(userRoutes);

module.exports = allRoutes;
