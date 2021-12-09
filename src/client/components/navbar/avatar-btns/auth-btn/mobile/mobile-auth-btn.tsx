import * as React from 'react';
// Components
import MenuBtns from './menu/mobile-auth-btn';
// MUI
import IconButton from '@mui/material/IconButton';
// Icons
import AccountCircle from '@mui/icons-material/AccountCircle';
// Types
import { ScreenFormats } from '../../../../../../types/index';


type Props = {
  screenFormat: ScreenFormats;
};


const MobileAuthBtn: React.FC<Props> = ({ screenFormat }) => {
  if (!screenFormat?.isMobile) return null;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <AccountCircle />
      </IconButton>

      <MenuBtns
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      />
    </>
  );
};


export default MobileAuthBtn;