import * as React from 'react';
// Routes
import { Link } from 'react-router-dom';
import { RouteType } from '../../../../../../utils/routes/routes';
// MUI Stuff
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// Types
import theme from '../../../../../../utils/styles/themes/themes';


const styleButton = {
  display: `flex`,
  justifyContent: `center`,
  mr: 2, ml: 2,
  pt: 1, pr: 3, pb: 1, pl: 3,
  color: theme.palette.primary.contrastText
};


type Props = {
  open: boolean;
  anchorEl: Element;
  onClose: () => void;
};


// Кнопка Navbar для входа в авторизацию
const MobileAuthBtn: React.FC<Props> = ({ open, anchorEl, onClose }) => {
  if (!open) return null;


  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        <MenuItem onClick={onClose} sx={styleButton}>
          <Link to={RouteType.LOGIN}>
            Войти
          </Link>
        </MenuItem>

      </Menu>
    </>
  );
};


export default MobileAuthBtn;