const db = require('../../database');

const create = async (proposalData) => {
  const [proposal] = await db('proposal').insert(proposalData).returning('*');

  return proposal;
};

module.exports = { create };
