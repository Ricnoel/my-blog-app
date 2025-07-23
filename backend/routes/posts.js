const express = require('express');
const router = express.Router();
const Post = require('../models/Post');  // Import Post model

// GET: Fetch all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();  // Fetch all posts from the database
    res.status(200).json(posts);      // Return posts as a JSON response
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Error fetching posts', error: error.message });
  }
});

module.exports = router;
