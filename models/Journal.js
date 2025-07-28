const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  title: String,
  entry: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Journal', journalSchema);
