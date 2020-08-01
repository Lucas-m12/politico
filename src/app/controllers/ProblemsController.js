const ProblemsModel = require('../models/ProblemsModel');

const store = async (req, res) => {
  const { key, location: url = '' } = req.file;

  const { category, coordinates, description } = req.body;

  try {
    const problem = await ProblemsModel.create({
      image_key: key, image_url: url, category, coordinates, description,
    });

    return res.status(201).json(problem);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { store };
