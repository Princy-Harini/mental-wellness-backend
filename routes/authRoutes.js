const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Signup Route
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ error: 'All fields are required' });

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({ error: 'User already exists' });

    const newUser = new User({ name, email, password });
    await newUser.save();

    return res.status(201).json({ message: 'Signup successful', user: newUser });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ error: 'Signup failed' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: 'Email and password are required' });

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials (user not found)' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials (wrong password)' });
    }

    return res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;
