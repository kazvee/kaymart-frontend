import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import StoreIcon from '@mui/icons-material/Store';

import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <AppBar position='static' color='secondary'>
      <Container maxWidth='xl'>
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color: 'inherit',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <StoreIcon sx={{ mr: 1 }} />
            KayMart
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='Account of Current User'
              color='inherit'
            >
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              Admin
            </Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              Shop
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <ShoppingCartIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
