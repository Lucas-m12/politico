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
  const proposal = await db('proposal').select('*').where({ id, status: 1 }).first();

  return proposal;
};

const update = async (proposalDataUpdate, proposalCondition) => {
  await db('proposal').where(proposalCondition).update(proposalDataUpdate);
};

module.exports = {
  create, getAll, get, update,
};
