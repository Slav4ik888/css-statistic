import * as React from 'react';
// MUI Stuff
import Menu from '@mui/material/Menu';
// Functions
import { UseAnchor } from '../../../../utils/hooks';



export interface Options {
  style: {
    width: number;
  }
}


const useStyles = ({ style: { width } }: Options) => ({
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
      },
      width
    }
  }
});


type Props = {
  hookAnchor : UseAnchor<Element>;
  menuId     : string;
  options    : Options;
  children   : JSX.Element | JSX.Element[];
};

/** Container for Navbar's menu */
const MenuContainerLogics: React.FC<Props> = ({ hookAnchor: A, menuId, options, children }) => {
  const
    sx = useStyles(options);

  return (
    <Menu
      id              = {menuId}
      open            = {A.open}
      onClose         = {A.setClose}
      anchorEl        = {A.anchor}
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
