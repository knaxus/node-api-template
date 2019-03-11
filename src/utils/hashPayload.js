const crypto = require('crypto');

async function generateHash(payload) {
  const hash = await crypto
    .createHash('sha512')
    .update(payload)
    .digest('hex');
  return hash;
}

module.exports = generateHash;
