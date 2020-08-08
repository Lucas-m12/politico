const validationProposal = require('../../validations/proposal');

module.exports = async (req, res, next) => {
  const { title, description } = req.body;

  try {
    await validationProposal.validateAsync({ title, description });

    return next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
