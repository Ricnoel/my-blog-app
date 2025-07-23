import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import PostList from './pages/PostList';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';

// Create a custom theme for Material UI
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [posts, setPosts] = useState([]);

  const handlePostCreate = (newPost) => {
    setPosts([newPost, ...posts]);  // Add new post to state
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flex: 1, padding: '20px' }}>
            <Navbar />
            <div style={{ marginTop: '64px' }}>
              <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="/posts" exact element={<PostList posts={posts} />} />
                <Route path="/create" exact element={<CreatePost onPostCreate={handlePostCreate} />} />
                <Route path="/edit/:id" element={<EditPost />} />
              </Routes>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
