const db = require('../../database');

const create = async (problemsData) => {
  const [problem] = await db('problems').insert(problemsData).returning('*');

  return problem;
};

const getAll = async () => {
  const problems = await db('problems').select('*');

  return problems;
};

module.exports = { create, getAll };
