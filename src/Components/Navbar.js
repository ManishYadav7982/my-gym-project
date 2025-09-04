import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Stack, AppBar, Toolbar, Box, Switch } from '@mui/material';
import { ColorModeContext } from '../theme/ThemeContent';
import { useTheme } from '@mui/material/styles';
import logo from "../New folder/logo gym final.png";

const Navbar = () => {
  const theme = useTheme(); // ✅ Access MUI theme
  const colorMode = useContext(ColorModeContext); // ✅ Access toggle function

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        paddingY: '10px',
        color: theme.palette.text.primary,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 2, sm: 4, md: 8 },
        }}
      >
        {/* // Logo with hover effect */}
        <Link to="/">
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{
              width: '150px',
              height: '60px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.4)',
              },
            }}
          />
        </Link>

        {/* ✅ Navigation Links */}
        <Stack direction="row" spacing={4} alignItems="center">
          <Box
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: theme.palette.text.primary,
              fontWeight: 'bold',
              fontSize: '18px',
              borderBottom: '3px solid #FF2625',
              paddingBottom: '4px',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#FF2625',
                transform: 'scale(1.1)',
              },
            }}
          >
            Home
          </Box>

          <Box
            component="a"
            href="#exercises"
            sx={{
              textDecoration: 'none',
              color: theme.palette.text.primary,
              fontWeight: 'bold',
              fontSize: '18px',
              paddingBottom: '4px',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#FF2625',
                transform: 'scale(1.1)',
              },
            }}
          >
            Exercises
          </Box>

          {/* ✅ Dark Mode Toggle
          <Switch
            onChange={colorMode.toggleColorMode}
            checked={theme.palette.mode === 'dark'}
          /> */}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
