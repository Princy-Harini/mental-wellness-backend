const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
  mood: String,
  note: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Mood', moodSchema);
