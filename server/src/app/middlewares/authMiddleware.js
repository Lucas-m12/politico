const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ error: 'No token provider' });

  const token = authorization.replace('Bearer', '').trim();

  try {
    const secretToken = process.env.SECRET;

    const { id } = jwt.verify(token, secretToken);

    req.userId = id;

    return next();
  } catch (error) {
    return res.status(401).json({ error });
  }
};
