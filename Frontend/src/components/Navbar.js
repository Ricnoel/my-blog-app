import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';  // Example icon for a menu button

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          DevSecOps Project  {/* Updated text here */}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        {/* You can add more items like notifications, settings, etc. */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
