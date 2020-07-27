const db = require('../../database');

const get = async (filterUser) => {
  const user = await db('users').select('*').where(filterUser).first();

  return user;
};

const create = async (userData) => {
  const [user] = await db('users').insert(userData).returning('*');

  return user;
};

const update = async (userData) => {
  await db('users').update(userData);
};

module.exports = { get, create, update };
