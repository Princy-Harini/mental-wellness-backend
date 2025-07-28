const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback');

// POST: Submit feedback
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();

    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (err) {
    console.error('❌ Feedback submission failed:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
