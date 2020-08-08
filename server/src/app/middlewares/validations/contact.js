const validationContact = require('../../validations/contact');

module.exports = async (req, res, next) => {
  const { message } = req.body;

  try {
    await validationContact.validateAsync({ message });

    return next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
