const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const UsersModel = require('../models/UsersModel');

const generateTokenJWT = require('../utils/generateTokenJWT');

const create = async (req, res) => {
  const {
    name, surname, phone, password,
  } = req.body;

  try {
    const user = await UsersModel.get();

    if (user) return res.status(400).json({ error: 'User already exists' });

    const id = uuidv4();

    const passwordHash = await bcrypt.hash(password, 8);

    const userData = {
      name, surname, phone, password: passwordHash, id,
    };

    const userResponse = await UsersModel.create(userData);

    delete userResponse.password;

    const token = generateTokenJWT({ id: userResponse.id });

    return res.status(201).json({ user: userResponse, token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  const { body: { status, name, surname }, userId } = req;

  try {
    await UsersModel.update({ status, surname, name }, userId);

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { create, update };
