const aws = require('aws-sdk');
const db = require('../../database');

const s3 = new aws.S3();

const create = async (contactData) => {
  const [bills] = await db('bills').insert(contactData).returning('*');

  return bills;
};

const getAll = async () => {
  const bills = await db('bills')
    .select('*');

  return bills;
};

const deleteBill = async (id) => {
  const keyBD = await db('bills').select('document_key').where({ id });
  const keyPosition = keyBD[0];
  const key = keyPosition.document_key;

  const bills = await db('bills').where({ id }).del();

  s3.deleteObject({
    Bucket: 'upload-document-test',
    Key: key,
  }).promise();

  return bills;
};

module.exports = { create, getAll, deleteBill };
