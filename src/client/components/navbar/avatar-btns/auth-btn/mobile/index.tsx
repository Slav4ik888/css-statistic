import * as React from 'react';
// Components
import MenuBtns from './menu';
// MUI
import IconButton from '@mui/material/IconButton';
// Icons
import AccountCircle from '@mui/icons-material/AccountCircle';



const MobileAuthBtn: React.FC = () => {
  const
    [anchorEl, setAnchorEl] = React.useState(null),
    open = Boolean(anchorEl),
    handleClick = (event) => setAnchorEl(event.currentTarget),
    handleClose = () => setAnchorEl(null);


  return (
    <>
      <IconButton
        id            = 'basic-button'
        aria-controls = 'basic-menu'
        aria-haspopup = 'true'
        aria-expanded = {open ? 'true' : undefined}
        onClick       = {handleClick}
      >
        <AccountCircle />
      </IconButton>

      <MenuBtns
        open     = {open}
        anchorEl = {anchorEl}
        onClose  = {handleClose}
      />
    </>
  );
};

export default MobileAuthBtn;
