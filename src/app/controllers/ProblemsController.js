const ProblemsModel = require('../models/ProblemsModel');

const index = async (req, res) => {
  const { page = 1 } = req.query;

  try {
    const { count, problems } = await ProblemsModel.getAll(page);

    res.header('X-Total-Count', count['count(*)']);

    return res.status(200).json(problems);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const show = async (req, res) => {
  const { id } = req.params;

  try {
    const problem = await ProblemsModel.get(id);

    return res.status(200).json(problem);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const store = async (req, res) => {
  const {
    body: {
      category, coordinates, description, unnamed,
    },
    file: { key, location: url = '' },
    userId,
  } = req;

  const problemData = unnamed ? {
    image_key: key, image_url: url, category, coordinates, description,
  } : {
    image_key: key, image_url: url, category, coordinates, description, id_user: userId,
  };

  try {
    const problem = await ProblemsModel.create(problemData);

    return res.status(201).json(problem);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {

};

const del = async (req, res) => {
  const { id } = req.params;

  try {
    await ProblemsModel.del({ id });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  index, show, store, update, del,
};
