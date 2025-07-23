import React, { useState } from 'react';
import { TextField, Button, Box, Container } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ onPostCreate }) => {  // Accept the onPostCreate function as prop
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      setError('Title and content are required!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/posts', { title, content });
      console.log('Post Created:', response.data);

      onPostCreate(response.data); // Update the parent component with the new post
      navigate('/posts'); // Redirect to the posts list page
    } catch (error) {
      console.error('Error creating post:', error);
      setError('Failed to create post!');
    }
  };

  return (
    <Container>
      <Box sx={{ padding: 4, boxShadow: 3, marginTop: '80px', display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
        <h1>Create Post</h1>
        {error && <Box sx={{ color: 'red', marginBottom: 2 }}>{error}</Box>}
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth sx={{ marginBottom: 2 }} />
          <TextField label="Content" value={content} onChange={(e) => setContent(e.target.value)} fullWidth multiline rows={4} sx={{ marginBottom: 2 }} />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
            Create Post
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default CreatePost;
