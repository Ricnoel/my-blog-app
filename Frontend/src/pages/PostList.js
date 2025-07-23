import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Button, Box, Container } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  // Fetch all posts on component mount
  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')  // Ensure correct URL
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        alert('Failed to fetch posts!');
      });
  }, []);

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <Button variant="contained" color="primary" component={Link} to="/create">
          Create Post
        </Button>
      </Box>

      <Grid container spacing={3}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post._id}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{post.title}</Typography>
                  <Typography variant="body2">{post.content.slice(0, 100)}...</Typography>
                  <Box sx={{ marginTop: 2, textAlign: 'right' }}>
                    <Button variant="contained" color="primary" component={Link} to={`/edit/${post._id}`} sx={{ marginRight: 2 }}>
                      Edit
                    </Button>
                    <Button variant="contained" color="secondary">
                      Delete
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ width: '100%', textAlign: 'center', padding: 3 }}>
            No posts available. Please create a post first.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default PostList;
