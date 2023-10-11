import React, { useState } from 'react';
import { Box, Typography, AppBar, Container, Toolbar, Stack, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Article, Email, Home, Phone, Terminal } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import logo from "../assets/logo.png"

const data = [
  { icon: <Home />, label: "Home", key: "/" },
  { icon: <Terminal />, label: "Projects", key: "/projects" },
  { icon: <Article />, label: "Posts", key: "/posts" },
  { icon: <Phone />, label: "+998915566474", key: "/contact" },
  { icon: <Email />, label: "@otabekjon2002@mail.ru", key: "/contact" },
];


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = () => {
    setAnchorEl(!anchorEl);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const list = () => (
    <Box
      sx={{ width: 310 }}
      role="presentation"
      onClick={handleClose}
    >
      <List disablePadding className='customList'>
        {data.map((item, i) => (
          <ListItem key={i} disablePadding className='customListItem'>
            <ListItemButton className='customListItemButton'>
              <ListItemIcon sx={{ color: 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <Link to={item.key}>
                <ListItemText primary={item.label} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box >
  );

  return (
    <AppBar position="fixed" sx={{ padding: { xs: "0", lg: "12px 0" } }}>
      <Container maxWidth="xxl">
        <Toolbar>
          <Stack width="100%" direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" alignItems="center" gap={2}>
              <Link to="/" >
                <img src={logo} alt="Logo" className="customLogo" />
              </Link>
              <Typography variant="h5" component="a" href="/" aria-label="Home">
                amonovotabek
              </Typography>
            </Stack>
            <Stack direction="row" gap={2} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Typography variant="body1" color="white" component="a" href="/" aria-label="Home">
                Home
              </Typography>
              <Typography variant="body1" color="white" component="a" href="/projects" aria-label="Projects">
                Projects
              </Typography>
              <Typography variant="body1" color="white" component="a" href="/posts" aria-label="Projects">
                Posts
              </Typography>
            </Stack>
            <Stack sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton
                role="presentation"
                onClick={handleMenu}
                aria-label="Open Menu"
                aria-controls="menu"
              >
                <MenuIcon sx={{ color: 'white' }} />
              </IconButton>
              <Drawer
                anchor="right"
                open={Boolean(anchorEl)}
                onClose={handleClose}
                aria-label="Drawer Menu"
                aria-labelledby="menu"
              >
                {list()}
              </Drawer>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
