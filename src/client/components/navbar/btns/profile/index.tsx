import * as React from 'react';
// MUI Stuff
import IconButton from '@mui/material/IconButton';
// Icons
import AccountCircle from '@mui/icons-material/AccountCircle';
// Components
import ProfileMenu from '../../menus/profile';
// Functions
import { useValue } from '../../../../utils/hooks';
// Styles
import { alpha } from '@mui/material/styles';
import { palette, Position } from '../../../../utils/styles';



const useStyles = (open: boolean) => ({
  icon: {
    p: 0,
    width: 44,
    height: 44,
    ...(open && {
      '&:before': {
        zIndex: 1,
        content: "''",
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        position: Position.ABS,
        bgcolor: alpha(palette.grey[900], 0.72)
      }
    })
  }
});


/**
 * Кнопка входа в личные кабинеты активация открытия / закрытия
 */
const ProfileMenuBtn: React.FC = () => {
  const
    anchorRef = React.useRef(null),
    menu      = useValue(),
    menuId    = 'profile-menu',
    sx        = useStyles(menu.open);


  return (
    <>
      <IconButton
        ref           = {anchorRef}
        aria-label    = 'account of current user'
        aria-controls = {menuId}
        aria-haspopup = 'true'
        onClick       = {() => menu.setOpen()}
        sx            = {sx.icon}
      >
        <AccountCircle />
        {/* <Avatar src={account.photoURL} alt='photoURL' /> */}
      </IconButton>

      <ProfileMenu
        menu     = {menu}
        menuId   = {menuId}
        anchorEl = {anchorRef.current}
      />
    </>
  );
};

export default ProfileMenuBtn;
