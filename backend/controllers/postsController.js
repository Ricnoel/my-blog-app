const Post = require('../models/Post');

// Create a new post
const createPost = async (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
