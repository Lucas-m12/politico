const aws = require('aws-sdk');
const db = require('../../database');

const s3 = new aws.S3();

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
  const keyBD = await db('problems').select('image_key').where({ id: filterDelete });
  const keyPosition = keyBD[0];
  const key = keyPosition.image_key;

  const problems = await db('problems').delete('*').where({ id: filterDelete });

  s3.deleteObject({
    Bucket: 'upload-document-test',
    Key: key,
  }).promise();

  return problems;
};

module.exports = {
  create, getAll, del, get,
};
