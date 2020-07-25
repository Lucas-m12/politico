const db = require('../../database');

const create = async (userData) => {
  const [user] = await db('users').insert(userData).returning('*');

  return user;
};

const update = async (userData) => {
  await db('users').update({ status: userData.status });
};

module.exports = { create, update };
