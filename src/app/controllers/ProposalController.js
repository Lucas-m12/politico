const ProposalModel = require('../models/ProposalModel');

const index = async (req, res) => {
  try {
    const proposals = await ProposalModel.getAll();

    return res.status(200).json(proposals);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  const { title, description } = req.body;

  try {
    const proposal = await ProposalModel.create({ title, description });

    return res.status(201).json(proposal);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { index, create };
