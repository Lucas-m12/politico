const db = require('../../database');

const create = async (problemsData) => {
  const [problem] = await db('problems').insert(problemsData).returning('*');

  return problem;
};

module.exports = { create };
