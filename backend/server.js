const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postsRoutes = require('./routes/posts');

const app = express();
const port = 5000;

// Middleware
app.use(express.json());  // Parse incoming JSON requests
app.use(cors());          // Enable CORS for cross-origin requests

// Routes
app.use('/api/posts', postsRoutes);  // Use the posts routes for the `/api/posts` path

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/yourdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
