const db = require('../../database');

const create = async (problemsData) => {
  const [problem] = await db('problems').insert(problemsData).returning('*');

  return problem;
};

const getAll = async () => {
  const problems = await db('problems').select('*');

  return problems;
};

const del = async (filterDelete) => {
  await db('problems').delete('*').where(filterDelete);
};

module.exports = { create, getAll, del };
