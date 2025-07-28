const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const journalRoutes = require('./routes/JournalRoutes');
const moodRoutes = require('./routes/moodRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://harinichepuru:oBtYQ6H6zcMyhIfe@cluster0.hvgwuzg.mongodb.net/mental_wellness?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB Error:", err));

app.use('/journal', journalRoutes);
app.use('/mood', moodRoutes);
app.use('/feedback', feedbackRoutes);
app.use('/auth', authRoutes);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
