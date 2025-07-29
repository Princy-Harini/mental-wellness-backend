const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => console.log('❌ MongoDB Error:', err));

// ✅ Routes
const journalRoutes = require('./routes/JournalRoutes');
app.use('/journal', journalRoutes);

const feedbackRoutes = require('./routes/feedbackRoutes');
console.log('📦 Loading feedback routes...');
app.use('/feedback', feedbackRoutes);
console.log('✅ Feedback routes connected.');

const moodRoutes = require('./routes/moodRoutes');
app.use('/mood', moodRoutes);

// ✅ ✅ ✅ ADD THIS to fix the 404 error
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

// ✅ Root test
app.get('/', (req, res) => {
  res.send('🎯 Welcome to Mental Wellness Hub API');
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
