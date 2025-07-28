const express = require('express');
const router = express.Router();
const Journal = require('../models/Journal');

// POST - Save new journal entry
router.post('/', async (req, res) => {
  try {
    console.log("📩 Data received:", req.body); // Debugging log

    const { title, entry } = req.body;

    if (!title || !entry) {
      console.log("❌ Missing fields");
      return res.status(400).json({ error: 'Missing title or entry' });
    }

    const newEntry = new Journal({ title, entry }); // ✅ FIXED: use 'entry'
    await newEntry.save();

    console.log("✅ Journal saved");
    res.status(201).json({ message: 'Journal saved successfully!' });
  } catch (error) {
    console.error("❌ Save failed:", error);
    res.status(500).json({ error: 'Failed to save journal' });
  }
});



// GET - Fetch all journals (optional)
router.get('/', async (req, res) => {
  try {
    const entries = await Journal.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch journals' });
  }
});

module.exports = router;
