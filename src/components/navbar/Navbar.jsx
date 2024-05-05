import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css';
import logo from '../../images/logo.png';
import { NavLink, Link } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <div className="navbar__bg">
        <div className="container">
          <Toolbar disableGutters>
            <div className="header__ms ">
              <Link className="navbar__logo" to="/">
                <img src={logo} alt="Logo" />
              </Link>
              <Box sx={{ flexGrow: 1 }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="black"
                  sx={{ display: { xs: 'block', md: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <StyledNavLink to="/">Home</StyledNavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <StyledNavLink to="/login">Login</StyledNavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <StyledNavLink to="/contactus">ContactUs</StyledNavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <StyledNavLink to="/cart">Cart</StyledNavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <StyledNavLink to="/wishtlist">Wishlist</StyledNavLink>
                  </MenuItem>
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <NavLink className='nav__item' to="/">Home</NavLink>
                <NavLink className='nav__item' to="/login">Login</NavLink>
                <NavLink className='nav__item' to="/contactus">ContactUs</NavLink>
                <NavLink className='nav__item' to="/cart">Cart</NavLink>
                <NavLink className='nav__item' to="/wishtlist">Wishlist</NavLink>
              </Box>
            </div>
          </Toolbar>
        </div>
      </div>
    </AppBar>
  );
}

export default Navbar;
