import * as React from 'react';
// Redux Stuff
import {connect} from 'react-redux';
import { userLogout } from '../../../../redux/actions/user';
import { getUser } from '../../../../redux/selectors/user';
import { getRoles } from '../../../../redux/selectors/ref-books';
import { State } from '../../../../redux/redux-types';
// MUI Stuff
import { ListItemIcon, Box, Divider, Typography, Button, MenuItem } from '@mui/material';
// Icons
import AccountCircle from '@mui/icons-material/AccountCircle';
import Settings from '@mui/icons-material/Settings';
// Components
import MenuPopover from '../../../dialogs/menu-popover';
import RoleCnt from './role';
// import UserProfile from '../../../profiles/user-profile/user-profile';
// Functions
import { UseBase, useValue } from '../../../../utils/hooks';
import { getFio } from '../../../../utils/helpers';
// Types & Styles
import { User, Roles } from '../../../../../types';
import { TextAlign } from '../../../../utils/styles/helpers-css';



const MENU_OPTIONS = [
  {
    label  : 'Ваш профиль',
    icon   : 'profile',
    linkTo : 'profile'
  },
  {
    label  : 'Настройки',
    icon   : 'settings',
    linkTo : 'settings'
  }
];


const useStyles = () => ({
  root: {
    width: 220
  },
  boxFio: {
    my : 1.5,
    px : 2.5
  },
  email: {
    textAlign: TextAlign.CENTER,
    my: 1.5,
    px: 2.5,
    color: '#777777',
    fontSize: `0.8rem`,
    fontStyle: `italic`
  },
  menuItem: {
    typography: 'body2',
    py: 1,
    px: 2.5
  },
  listIcon: {
    width: 24,
    height: 24,
    mr: 2
  },
  exit: {
    p: 2,
    pt: 1.5
  }
});


type Props = {
  menu        : UseBase;
  anchorEl    : Element;
  menuId      : string;
  roles?      : Roles;
  user?       : User;
  userLogout? : (email: string) => void;
};


/**
 * Меню с профилями для Navbar
 */
const ProfileMenu: React.FC<Props> = ({ roles, user, menu, anchorEl, menuId, userLogout }) => {
  const
    sx      = useStyles(),
    profile = useValue(false); // Профиль пользователя
  
  // Выход из аккаунта
  const handleUserLogout = () => {
    menu.setClose();
    userLogout(user.email);
  };

  
  return (
    <MenuPopover poper={menu} poperId={menuId} anchorEl={anchorEl} sx={sx.root}>
      <>
        <Box sx={sx.boxFio}>
          <Typography variant="subtitle1" noWrap>{getFio(user?.person)}</Typography>
          <RoleCnt roles={roles} user={user} />
        </Box>

        <Divider sx={{ my: 1 }} />
        
        <Typography  sx={sx.email} noWrap>{user.email}</Typography>

        {
          MENU_OPTIONS.map((option) => (
            <MenuItem
              key     = {option.linkTo}
              onClick = {() => menu.setClose()}
              sx      = {sx.menuItem}
            >
              <ListItemIcon sx={sx.listIcon}>
                {
                  option.icon === `profile`
                    ? <AccountCircle fontSize="small" />
                    : <Settings fontSize="small" />
                }
              </ListItemIcon>
              
              {option.label}
            </MenuItem>
          ))
        }

        <Divider />

        {/* <MenuItem
          key="instr"
          onClick={menu.setClose}
          sx={{ typography: 'body2', fontStyle: `italic`, py: 1, px: 2.5 }}
        >
          <ListItemIcon sx={{ mr: 2, width: 24, height: 24 }}>
            <ReceiptIcon fontSize="small" />
          </ListItemIcon>
          
          <Link
            href="https://docs.google.com/document/d/1JnndlUCXo9_7mQWTKyPapiAfs2_vjuIdTjxk6reRXjY/edit?usp=sharing"
            target="_blank" rel="noopener"
          >
            Инструкция
          </Link>
        </MenuItem> */}
        

        <Box sx={sx.exit}>
          <Button fullWidth color="inherit" variant="outlined" onClick={handleUserLogout}>
            Выйти
          </Button>
        </Box>
      </>
    </MenuPopover>
  )
};

const mapStateToProps = (state: State) => ({
  user  : getUser(state),
  roles : getRoles(state)
});

export default connect(mapStateToProps, { userLogout })(ProfileMenu);
