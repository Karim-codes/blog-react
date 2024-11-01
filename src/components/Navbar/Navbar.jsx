import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import './Navbar.css';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery('(max-width:768px)'); // Adjusted breakpoint to match your CSS

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <AppBar position="fixed" style={{ backgroundColor: '#333', color: 'white' }}>
        <Toolbar>
          {/* Logo */}
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            <Link to="/" className="nav-link" >The Balanced Dev</Link>
          </Typography>

          {/* Mobile Menu Icon */}
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose} component={Link} to="/">
                  Home
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/posts">
                  Blog Posts
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/categories">
                  Categories
                </MenuItem>
              </Menu>
            </>
          ) : (
            // Full Navbar Links for Desktop
            <ul className="desktop-nav">
              <li>
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li>
                <Link to="/posts" className="nav-link">Blog Posts</Link>
              </li>
              <li>
                <Link to="/categories" className="nav-link">Categories</Link>
              </li>
            </ul>
          )}
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Navbar;
