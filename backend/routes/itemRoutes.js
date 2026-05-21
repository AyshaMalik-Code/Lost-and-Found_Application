const express = require("express");
const router = express.Router();
const multer = require("multer");
const Item = require("../models/Item");

// 📁 STORAGE CONFIG
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// 🟢 CREATE ITEM WITH IMAGE
router.post("/", upload.single("image"), async (req, res) => {
  try {

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const newItem = new Item({
      name: req.body.name || "",
      location: req.body.location || "",
      contact: req.body.contact || "",
      type: req.body.type || "",
      image: req.file ? req.file.filename : ""
    });

    await newItem.save();

    res.json(newItem);

  } catch (err) {
    console.log("ERROR:", err);   // 🔥 IMPORTANT
    res.status(500).json({ error: err.message });
  }
});

// 🔵 GET ALL ITEMS
router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// 🔴 DELETE
router.delete("/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// 🟡 UPDATE
router.put("/:id", upload.single("image"), async (req, res) => {
  const updatedData = {
    ...req.body
  };

  if (req.file) {
    updatedData.image = req.file.filename;
  }

  await Item.findByIdAndUpdate(req.params.id, updatedData);
  res.json({ message: "Updated" });
});

module.exports = router;