import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Container } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setContent(response.data.content);
      })
      .catch((error) => {
        console.error('Error fetching post:', error);
        alert('Failed to fetch post!');
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("Title and content are required!");
      return;
    }

    axios.put(`http://localhost:5000/api/posts/${id}`, { title, content })
      .then((response) => {
        console.log('Post Updated:', response.data);
      })
      .catch((error) => {
        console.error('Error updating post:', error);
        alert('Failed to update post!');
      });
  };

  return (
    <Container>
      <Box sx={{ padding: 4, boxShadow: 3, marginTop: '80px', display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
        <h1>Edit Post</h1>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: 2 }}
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Update Post
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default EditPost;
