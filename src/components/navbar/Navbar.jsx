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
          <div className="cent">
            <Toolbar className="header__ms" disableGutters>
              <Link to="/">
                <img className='logo' src={logo} alt="Logo" />
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
                    <NavLink to="/">Home</NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink to="/login">Login</NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink to="/contactus">ContactUs</NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink to="/cart">Cart</NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink to="/wishtlist">Wishlist</NavLink>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
            <Box >
              <div className="navvv">
                <NavLink className='nav__item' to="/">Home</NavLink>
                <Link to={"#"} className='nav__item'>BAGS</Link>
                <Link to={"#"} className='nav__item'>SNEAKERS</Link>
                <Link to={"#"} className='nav__item'>BELT</Link>
                <NavLink className='nav__item' to="/contactus">CONTACT</NavLink>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </AppBar>
  );
}

export default Navbar;
