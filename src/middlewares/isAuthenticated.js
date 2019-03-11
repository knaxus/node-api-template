const { sendResponse, jwt } = require('../utils');

async function isAuthenticated(req, res, next) {
  const token = req.header('x-auth-token');

  try {
    if (!token) {
      return sendResponse(res, 401, { tokenExpired: 0 }, 'Failed to Authenticate');
    }

    const decoded = jwt.decryptAccessToken(token);

    // if everything is good, save to request for use in other routes
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return sendResponse(res, 401, { tokenExpired: 1 }, 'Token Expired');
    }
    if (err.name === 'JsonWebTokenError') {
      return sendResponse(res, 401, { tokenExpired: 0 }, 'Corrupt Token');
    }
  }
  return 0;
}

module.exports = isAuthenticated;
