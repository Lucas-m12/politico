const ProposalModel = require('../models/ProposalModel');

const index = async (req, res) => {
  try {
    const proposals = await ProposalModel.getAll();

    return res.status(200).json(proposals);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const show = async (req, res) => {
  const { id } = req.params;

  try {
    const proposal = await ProposalModel.get(id);

    return res.status(200).json(proposal);
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

const update = async (req, res) => {
  const { body: { title, description }, params: { id } } = req;

  try {
    await ProposalModel.update({ title, description }, { id });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  index, create, show, update,
};
