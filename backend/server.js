const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

const studentRoutes = require('./routes/students');
app.use('/api/students', studentRoutes);

const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1, 'frontend/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname1, 'frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
