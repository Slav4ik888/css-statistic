import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// Components
import LogoBtn from '../buttons/logo-btn/logo-btn';
import NavbarMenuBtns from './avatar-btns/avatar-btns';
import NavbarUser from './navbar/navbar-user';
// Types
import { LogoBtnType } from '../../../types/index';
// Styles
import { Position } from '../../utils/styles';
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 1100,
    position: Position.REL,
    height: `50px`
  },
  appBar: {
    height: `50px`,
    minHeight: `50px`,
    '&.MuiAppBar-root': {
      backgroundColor: theme.navbar.background
    }
  },
  toolBar: {
    '&.MuiToolbar-root': {
      height: `50px`,
      minHeight: `50px`
    }
  }
});


// Верхняя навигационная панель
const Navbar = ({ history }) => {
  const sx = useStyles(useTheme());

  return (
    <Box id="navbar_top" sx={sx.root}>
      <AppBar sx={sx.appBar} position="static">
        <Toolbar sx={sx.toolBar}>

          <LogoBtn type={LogoBtnType.NAV_UP} />

          <Box sx={{ flexGrow: 1 }} />

          <NavbarUser history={history} />

          <Box sx={{ flexGrow: 1 }} />

          <NavbarMenuBtns />
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};


export default Navbar;
