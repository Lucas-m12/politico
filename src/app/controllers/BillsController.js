const BillModel = require('../models/BillModel');

const store = async (req, res) => {
  const { title, menu } = req.body;
  const {
    key, location: url = '',
  } = req.file;

  const contactData = {
    title,
    menu,
    document_key: key,
    document_url: url,
  };

  try {
    const bill = await BillModel.create(contactData);

    return res.status(201).json(bill);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const index = async (req, res) => {
  try {
    const bill = await BillModel.getAll();

    return res.json(bill);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const del = async (req, res) => {
  const { id } = req.params;

  try {
    await BillModel.deleteBill(id);

    return res.send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { store, index, del };
