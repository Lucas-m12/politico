const db = require('../../database');

const create = async (proposalData) => {
  const [proposal] = await db('proposal').insert(proposalData).returning('*');

  return proposal;
};

const getAll = async () => {
  const proposals = await db('proposal').select('*').where({ status: 1 });

  return proposals;
};

const get = async (id) => {
  const proposal = await db('proposal').select('*').where({ id }).first();

  return proposal;
};

module.exports = { create, getAll, get };
