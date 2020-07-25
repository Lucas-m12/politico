const validationUser = require('../../validations/users');
const validationUserUpdate = require('../../validations/userUpdate');

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
  try {
    await validationUserUpdate.validateAsync(req.body);

    return next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.auth = async (req, res, next) => {
  const { phone, password } = req.body;

  if (!phone.trim()) return res.status(400).json({ error: 'phone not informed' });

  if (!password.trim()) return res.status(400).json({ error: 'password not informed' });

  return next();
};
