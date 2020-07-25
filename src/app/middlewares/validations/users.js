const validationUser = require('../../validations/users');

exports.create = async (req, res, next) => {
  try {
    await validationUser.validateAsync(req.body);

    delete req.body.confirm_password;

    return next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res, next) => {
  const { status } = req.body;

  if (!status || status > 3 || status < 0) {
    return res.status(400).json({ error: 'status not exist' });
  }

  return next();
};
