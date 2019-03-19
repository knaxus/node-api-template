const jwt = require('jsonwebtoken');

const createAccessToken = data => jwt.sign(data, process.env.TOKEN_SECRET, {
  expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
  algorithm: process.env.ACCESS_TOKEN_ALGO,
});

const decryptAccessToken = token => jwt.decode(token, process.env.TOKEN_SECRET, {
  expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
  algorithm: process.env.ACCESS_TOKEN_ALGO,
});

const createaRefreshToken = data => jwt.sign(data, process.env.TOKEN_SECRET, {
  expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
  algorithm: process.env.REFRESH_TOKEN_ALGO,
});

const decryptRefreshToken = token => jwt.decode(token, process.env.TOKEN_SECRET, {
  expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
  algorithm: process.env.REFRESH_TOKEN_ALGO,
});

module.exports = {
  createAccessToken,
  decryptAccessToken,
  createaRefreshToken,
  decryptRefreshToken,
};
