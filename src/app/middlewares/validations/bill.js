const validationBill = require('../../validations/bill');

module.exports = async (req, res, next) => {
  const { title, menu } = req.body;
  const { file } = req;

  try {
    await validationBill.validateAsync({ title, menu, file });

    return next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
