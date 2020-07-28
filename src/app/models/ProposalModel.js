const db = require('../../database');

const create = async (proposalData) => {
  const [proposal] = await db('proposal').insert(proposalData).returning('*');

  return proposal;
};

const getAll = async () => {
  const proposals = await db('proposal').select('*');

  return proposals;
};

module.exports = { create, getAll };
