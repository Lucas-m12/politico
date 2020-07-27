const db = require('../../database');

const ContactModel = require('../models/ContactModel');

const create = async (req, res) => {
  const { message } = req.body;
  const { userId } = req;

  const contactData = { message, id_user: userId };

  try {
    const contact = await ContactModel.create(contactData);

    return res.status(201).json(contact);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const index = async (req, res) => {
  try {
    const contacts = await ContactModel.getAll();

    return res.json(contacts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { create, index };
