const db = require('../../database');

const create = async (contactData) => {
  const [contact] = await db('contacts').insert(contactData).returning('*');

  return contact;
};

module.exports = { create };