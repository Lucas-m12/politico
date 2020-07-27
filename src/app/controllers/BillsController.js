const db = require('../../database');

const create = (req, res) => {
  console.log(req.file);

  return res.json({ funcio: 'nou' });
};

module.exports = { create };
