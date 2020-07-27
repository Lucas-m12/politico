const db = require('../../database');

const create = async (contactData) => {
  const [contact] = await db('contacts').insert(contactData).returning('*');

  return contact;
};

const getAll = async () => {
  const contacts = await db('contacts')
    .join('users', 'users.id', '=', 'contacts.id_user')
    .select([
      'contacts.*',
      'users.phone',
      'users.name',
      'users.surname',
    ]);

  return contacts;
};

module.exports = { create, getAll };
