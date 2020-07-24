const validationUser = require('../../validations/users');

module.exports = async (req, res, next) => {
  try {
    await validationUser.validateAsync(req.body);

    delete req.body.confirm_password;

    return next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
