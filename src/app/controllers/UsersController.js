const { v4: uuidv4 } = require('uuid');

const UsersModel = require('../models/UsersModel');

const generateTokenJWT = require('../utils/generateTokenJWT');

const create = async (req, res) => {
  const id = uuidv4();

  const userData = { ...req.body, id };

  try {
    const user = await UsersModel.create(userData);

    const token = generateTokenJWT({ id: user.id });

    return res.status(201).json({ user, token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { create };
