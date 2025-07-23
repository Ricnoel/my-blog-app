const mongoose = require('mongoose');

// Define the schema for a blog post
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,  // Adds createdAt and updatedAt fields automatically
});

// Create a model from the schema
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
