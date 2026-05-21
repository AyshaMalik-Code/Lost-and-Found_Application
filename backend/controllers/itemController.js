const Item = require("../models/Item");

exports.addItem = async (req, res) => {
  try {
    const item = new Item({
      name: req.body.name,
      description: req.body.description,
      location: req.body.location,
      date: req.body.date,
      type: req.body.type,
      contact: req.body.contact,
      image: req.file ? req.file.filename : ""
    });

    await item.save();
    res.json({ message: "Item Added Successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};