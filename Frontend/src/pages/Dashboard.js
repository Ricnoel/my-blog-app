import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import axios from 'axios';

const Dashboard = () => {
  const [totalPosts, setTotalPosts] = useState(0);
  const [recentPosts, setRecentPosts] = useState([]);

  // Fetch total number of posts and recent posts
  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then((response) => {
        setTotalPosts(response.data.length); // Set total posts count
        setRecentPosts(response.data.slice(0, 5)); // Set the first 5 recent posts
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">Total Posts</Typography>
            <Typography variant="h6">{totalPosts}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={8}>
        <Card>
          <CardContent>
            <Typography variant="h5">Recent Posts</Typography>
            <Box>
              {recentPosts.map((post) => (
                <Box key={post._id} sx={{ marginBottom: 2 }}>
                  <Typography variant="h6">{post.title}</Typography>
                  <Typography variant="body2">{post.content.slice(0, 100)}...</Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
