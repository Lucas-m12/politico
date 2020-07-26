const db = require('../../database');

const ContactModel = require('../models/ContactModel');

const generateTokenJWT = require('../utils/generateTokenJWT');

const create = async(req, res) => {

    const { message } = req.body;
    const id_user = req.headers.authorization;

    const contactData = { message, id_user };

    try {
        const contact = await ContactModel.create(contactData);

        const token = generateTokenJWT({ id: contact.id });

        return res.status(201).json({ contact, token });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

};

const get = async(req, res) => {
    const contacts = await db('contacts')
    .join('users', 'users.id', '=', 'contacts.id_user')
    .select([
        'contacts.*',
        'users.phone'
    ]);
    return res.json(contacts);
}

module.exports = { create, get }