const db = require('../../database');

const create = async (userData) => {
  const user = await db('users').insert(userData).returning('*').first();

  return user;
};

module.exports = { create };
