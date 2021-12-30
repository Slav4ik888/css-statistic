import * as React from 'react';
// Redux Stuff
import {connect} from 'react-redux';
import { userLogout } from '../../../../redux/actions/user';
import { getUser } from '../../../../redux/selectors/user';
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
import { useOpen } from '../../../../utils/hooks/hooks';
import getUserName from './utils/get-user-name';
// Types
import { User } from '../../../../../types';
import { UseOpen } from '../../../../utils/hooks/types';
// Styles
import { useTheme } from '@emotion/react';
import { Position, TextAlign } from '../../../../utils/styles/helpers-css';


const MENU_OPTIONS = [
  {
    label: 'Ваш профиль',
    icon: 'profile',
    linkTo: 'profile'
  },
  {
    label: 'Настройки',
    icon: 'settings',
    linkTo: 'settings'
  }
];


const useStyles = (theme) => ({
  paper: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: Position.ABS,
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
  email: {
    textAlign: TextAlign.CENTER,
    my: 1.5,
    px: 2.5,
    color: '#777777',
    fontSize: `0.8rem`,
    fontStyle: `italic`
  }
});


type Props = {
  menu        : UseOpen;
  anchorEl    : Element;
  menuId      : string;
  user?       : User;
  userLogout? : (email: string) => void;
};


// Меню с профилями для Navbar
const ProfileMenu: React.FC<Props> = ({ user, menu, anchorEl, menuId, userLogout }) => {
  const sx = useStyles(useTheme());

  // Профиль пользователя
  const profile = useOpen(false);
  
  // Выход из аккаунта
  const handleUserLogout = () => {
    menu.setClose();
    userLogout(user.email);
  }

  
  return (
    <MenuPopover poper={menu} poperId={menuId} anchorEl={anchorEl} sx={{ width: 220 }}>
      <>
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>{getUserName(user.person)}</Typography>
          <RoleCnt user={user} />
        </Box>

        <Divider sx={{ my: 1 }} />
        
        <Typography  sx={sx.email} noWrap>{user.email}</Typography>

        {
          MENU_OPTIONS.map((option) => (
            <MenuItem
              key={option.linkTo}
              onClick={menu.setClose}
              sx={{ typography: 'body2', py: 1, px: 2.5 }}
            >
              <ListItemIcon sx={{ mr: 2, width: 24, height: 24 }}>
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
        

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullWidth color="inherit" variant="outlined" onClick={handleUserLogout}>
            Выйти
          </Button>
        </Box>
      </>
    </MenuPopover>
  )
};

const mapStateToProps = (state: State) => ({
  user: getUser(state)
});

export default connect(mapStateToProps, { userLogout })(ProfileMenu);