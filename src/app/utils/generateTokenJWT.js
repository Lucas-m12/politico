const jwt = require('jsonwebtoken');

const generateTokenJWT = (payload) => {
  const secretToken = process.env.SECRET;

  const token = jwt.sign(payload, secretToken);

  return token;
};

module.exports = generateTokenJWT;
