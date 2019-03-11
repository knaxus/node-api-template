const userRoutes = require('express').Router();
const {
  loginUserController,
  createNewUserController,
  changeUserEmailController,
  changeUserPasswordController,
} = require('./users.controller');
const isAuthenticated = require('../../middlewares/isAuthenticated');

userRoutes.post('/users/login', loginUserController);
userRoutes.post('/users/new', createNewUserController);
userRoutes.patch('/users/email', isAuthenticated, changeUserEmailController);
userRoutes.patch('/users/password', isAuthenticated, changeUserPasswordController);

module.exports = userRoutes;
