const UsersModel = require('../models/UsersModel');

module.exports = async (req, res, next) => {
  const id = req.userId;

  try {
    const { admin } = await UsersModel.get({ id });

    if (!admin) return res.status(401).json({ error: 'User not admin' });

    return next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
