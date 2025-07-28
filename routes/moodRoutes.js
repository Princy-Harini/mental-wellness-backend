const express = require('express');
const router = express.Router();
const Mood = require('../models/Mood');

// POST - Save mood
router.post('/', async (req, res) => {
  try {
    const { mood, note } = req.body;
    if (!mood || !note) {
      return res.status(400).json({ error: 'Mood and note are required' });
    }

    const newMood = new Mood({ mood, note });
    await newMood.save();
    res.status(201).json({ message: 'Mood saved successfully!' });
  } catch (error) {
    console.error("❌ Error saving mood:", error);
    res.status(500).json({ error: 'Failed to save mood' });
  }
});

// GET - Fetch moods
router.get('/', async (req, res) => {
  try {
    const moods = await Mood.find().sort({ createdAt: -1 });
    res.json(moods);
  } catch (error) {
    console.error("❌ Error fetching moods:", error);
    res.status(500).json({ error: 'Failed to fetch moods' });
  }
});

module.exports = router;
