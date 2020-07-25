const bcrypt = require('bcrypt');
const UsersModel = require('../models/UsersModel');

const generateTokenJWT = require('../utils/generateTokenJWT');

const auth = async (req, res) => {
  const { phone, password } = req.body;

  const user = await UsersModel.get({ phone });

  if (!user) return res.status(400).json({ error: 'user not found' });

  if (!await bcrypt.compare(password, user.password)) {
    return res.status(400).json({ error: 'Inavalid password' });
  }

  delete user.password;

  const token = generateTokenJWT({ id: user.id });

  return res.status(200).json({ user, token });
};

module.exports = { auth };
