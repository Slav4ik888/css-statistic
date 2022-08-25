import * as React from 'react';
// MUI Stuff
import Menu from '@mui/material/Menu';
// Functions
import { UseGroup } from '../../../../utils/hooks';



const useStyles = () => ({
  paper: {
    elevation: 0,
    sx: {
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
        position: 'absolute',
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
      }
    }
  }
});


type Props = {
  hookAnchor : UseGroup<Element>;
  menuId     : string;
  children   : JSX.Element | JSX.Element[];
};

/** Container for Navbar's menu */
const MenuContainerLogics: React.FC<Props> = ({ hookAnchor: A, menuId, children }) => {
  const
    sx = useStyles();

  return (
    <Menu
      id              = {menuId}
      open            = {A.open}
      onClose         = {A.setClose}
      anchorEl        = {A.group}
      anchorOrigin    = {{ vertical: 'top', horizontal: 'right' }}
      transformOrigin = {{ vertical: 'top', horizontal: 'right' }}
      PaperProps      = {sx.paper}
      keepMounted
    >
      {children}
    </Menu>
  )
};

export default MenuContainerLogics;
