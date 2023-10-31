import React from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '../Authentication/ContextAuth'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';

const pages2 = ['Home', 'About', 'Blog','Course','Contact'];
const pages = ['Login', 'Register']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [auth, setAuth] = useAuth()
  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOut = (e) => {
    e.preventDefault()
    setAuth({
      ...auth,
      user: null,
      token: ''
    })

    localStorage.removeItem('auth')
    toast.success("logout successfully")
    navigate('/login')
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'blue',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="blue"
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
                display: { xs: 'block', md: 'none' }
              }}
            >

              {

                !auth.user ? (

                  pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" onClick={() => navigate(`/${page}`)}>{page}</Typography>
                    </MenuItem>
                  ))

                ) : (
                  pages2.map((page) => {
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" onClick={() => navigate(`/${page}`)}>{page}</Typography>
                    </MenuItem>
                  })

                )}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}

          >
            LOGO
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            {
              !auth.user ? (pages.map((page) => (
                <Button
                  component={Link} to={`/${page}`}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>)))
                : (pages2.map((page) => (
                  <Button
                    component={Link} to={`/${page}`}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>)
                ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {
              !auth.user ? null : (
                <>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt={auth.user.name} src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {
                      settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu} >



                          <Typography textAlign="center" onClick={setting === 'Logout' ? (                            
                              handleOut
                              // <Modal
                              //   open={true}
                              //   onClose={handleClose}
                              //   aria-labelledby="parent-modal-title"
                              //   aria-describedby="parent-modal-description"
                              // >
                              //   <Box sx={{ ...style, width: 400 }}>
                              //     <h2 id="parent-modal-title">Are you sure...you want to logout?</h2>
                              //     <p id="parent-modal-description">
                              //       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                              //     </p>
                              //   </Box>
                              // </Modal>
                          ) : (() => navigate(`/${setting}`))} >{setting}</Typography>
                        </MenuItem>
                      ))
                    }
                  </Menu>
                </>
              )
            }

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );


}


export default Navbar