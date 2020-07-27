const ProposalModel = require('../models/ProposalModel');

const create = async (req, res) => {
  const { title, description } = req.body;

  try {
    const proposal = await ProposalModel.create({ title, description });

    return res.status(201).json(proposal);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { create };
