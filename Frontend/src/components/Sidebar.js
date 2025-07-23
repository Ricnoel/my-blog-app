import React from 'react';
import { List, ListItem, ListItemText, Divider, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          position: 'sticky',
          top: '64px',  // Add top margin to push the sidebar lower
          height: 'calc(100vh - 64px)',  // Make the sidebar height fit the page, minus the top navbar
          paddingTop: '20px', // Optional: Add padding to the top to give space
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        {/* Add links for Post List, Create Post, Edit Post */}
        <ListItem button component={Link} to="/posts">
          <ListItemText primary="Post List" />
        </ListItem>
        <ListItem button component={Link} to="/create">
          <ListItemText primary="Create Post" />
        </ListItem>
        <ListItem button component={Link} to="/edit/:id">
          <ListItemText primary="Edit Post" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
