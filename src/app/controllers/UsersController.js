const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const UsersModel = require('../models/UsersModel');

const generateTokenJWT = require('../utils/generateTokenJWT');

const create = async (req, res) => {
  const id = uuidv4();

  const {
    name, surname, phone, password,
  } = req.body;

  const passwordHash = await bcrypt.hash(password, 8);

  const userData = {
    name, surname, phone, password: passwordHash, id,
  };

  try {
    const user = await UsersModel.create(userData);

    delete user.password;

    const token = generateTokenJWT({ id: user.id });

    return res.status(201).json({ user, token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  const { status, name, surname } = req.body;

  try {
    await UsersModel.update({ status, surname, name });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { create, update };
