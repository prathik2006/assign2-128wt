const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
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

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Student Management System API' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});