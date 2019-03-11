function validateLoginRequest(req) {
  req
    .checkBody('email', 'user email is required/invalid')
    .isEmail()
    .exists();
  req
    .checkBody('password', 'user password is required')
    .isLength({ min: 6 })
    .exists();
  return req.validationErrors();
}

function validateCreateUserRequest(req) {
  req
    .checkBody('email', 'user email is required/invalid')
    .isEmail()
    .exists();
  req
    .checkBody('password', 'user password is required')
    .isLength({ min: 6 })
    .exists();
  req
    .checkBody('firstName', 'user firstName is required')
    .isString()
    .isLength({ min: 3 })
    .exists();
  req
    .checkBody('lastName', 'user lastName is required')
    .isString()
    .isLength({ min: 3 })
    .exists();
  return req.validationErrors();
}

function validateChangeEmailRequest(req) {
  req
    .checkBody('oldEmail', 'user oldEmail is required/invalid')
    .isEmail()
    .exists();
  req
    .checkBody('newEmail', 'user newEmail is required/invalid')
    .isEmail()
    .exists();
  req
    .checkBody('password', 'user password is required')
    .isLength({ min: 6 })
    .exists();
  return req.validationErrors();
}

function validateChangePasswordRequest(req) {
  req
    .checkBody('oldPassword', 'user oldPassword is required')
    .isLength({ min: 6 })
    .exists();
  req
    .checkBody('newPassword', 'user newPassword is required')
    .isLength({ min: 6 })
    .exists();
  return req.validationErrors();
}

module.exports = {
  validateLoginRequest,
  validateCreateUserRequest,
  validateChangeEmailRequest,
  validateChangePasswordRequest,
};
