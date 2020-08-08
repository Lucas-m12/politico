const db = require('../../database');

const create = async (problemsData) => {
  const [problem] = await db('problems').insert(problemsData).returning('*');

  return problem;
};

const getAll = async (page) => {
  const [count] = await db('problems').count();

  const problems = await db('problems').select('*').limit(10).offset((page - 1) * 10);

  return { count, problems };
};

const get = async (id) => {
  const problem = await db('problems')
    .join('problem_categories', 'problems.category', '=', 'problem_categories.id')
    .leftJoin('users', 'problems.id_user', '=', 'users.id')
    .where({ id })
    .select([
      'problems.*',
      'problem_categories.category',
      'users.name',
      'users.surname',
      'users.phone',
    ])
    .first();

  return problem;
};

const del = async (filterDelete) => {
  await db('problems').delete('*').where(filterDelete);
};

module.exports = {
  create, getAll, del, get,
};
