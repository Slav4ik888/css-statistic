import * as React from 'react';
import { RouteType } from '../../../../utils/routes/routes';
// MUI Stuff
import Menu from '@mui/material/Menu';
// Components
import TestingMenuItem from './menu-item';
// Consts
import TestingMenus from '../../../../consts/testing/testing-menus';
// Styles
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  root: {
    elevation: 0,
    sx: {
      overflow: 'visible',
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      width: 320,
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
    },
  },
});



type Props = {
  open     : boolean;
  anchorEl : Element;
  menuId   : string;
  history: { location: { pathname: string }, push: (path: string) => void };
  onClose  : () => void;
};


const TestingMenu: React.FC<Props> = ({ open, history, anchorEl, menuId, onClose }) => {
  const sx = useStyles(useTheme());

  // React.MouseEvent<HTMLElement>
  const handleClick = (e: any) => {
    const target = e.target.closest(`li`);
    // console.log('target.id: ', target.id);
    // TODO: при добавлении ещё одного пункта меню сделать switch by id 
    history.push(`${RouteType.TESTS}/${target.id}`);
    onClose()
  }

  return (
    <Menu
      open            = {open}
      onClose         = {onClose}
      anchorEl        = {anchorEl}
      anchorOrigin    = {{ vertical: 'center', horizontal: 'right' }}
      id              = {menuId}
      keepMounted
      transformOrigin = {{ vertical: 'top', horizontal: 'right' }}
      PaperProps      = {sx.root}
    >
      {
        TestingMenus.map((item, i) => <TestingMenuItem
            key    = {item.id}
            item   = {item}
            onOpen = {handleClick}
          />)
      }
    </Menu>
  )
};

export default TestingMenu;