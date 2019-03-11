const jwt = require('jsonwebtoken');

const {
  TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRY,
  ACCESS_TOKEN_ALGO,
  REFRESH_TOKEN_EXPIRY,
  REFRESH_TOKEN_ALGO,
} = require('../config');

if (
  !TOKEN_SECRET
  || !ACCESS_TOKEN_EXPIRY
  || !ACCESS_TOKEN_ALGO
  || !REFRESH_TOKEN_EXPIRY
  || !REFRESH_TOKEN_ALGO
) {
  throw new Error('JWT settings not found in env');
}

const createAccessToken = data => jwt.sign(data, TOKEN_SECRET, {
  expiresIn: ACCESS_TOKEN_EXPIRY,
  algorithm: ACCESS_TOKEN_ALGO,
});

const decryptAccessToken = token => jwt.decode(token, TOKEN_SECRET, {
  expiresIn: ACCESS_TOKEN_EXPIRY,
  algorithm: ACCESS_TOKEN_ALGO,
});

const createaRefreshToken = data => jwt.sign(data, TOKEN_SECRET, {
  expiresIn: REFRESH_TOKEN_EXPIRY,
  algorithm: REFRESH_TOKEN_ALGO,
});

const decryptRefreshToken = token => jwt.decode(token, TOKEN_SECRET, {
  expiresIn: REFRESH_TOKEN_EXPIRY,
  algorithm: REFRESH_TOKEN_ALGO,
});

module.exports = {
  createAccessToken,
  decryptAccessToken,
  createaRefreshToken,
  decryptRefreshToken,
};
