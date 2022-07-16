import * as React from 'react';
// MUI Stuff
import Popover from '@mui/material/Popover';
import { alpha, styled } from '@mui/material/styles';
// Types & Styles
import { UseBase } from '../../../utils/hooks';
import { palette } from '../../../utils/styles';



const ArrowStyle = styled('span')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    top: -7,
    zIndex: 1,
    width: 12,
    right: 20,
    height: 12,
    content: "''",
    position: 'absolute',
    borderRadius: '0 0 4px 0',
    transform: 'rotate(-135deg)',
    background: `#fff`, // theme.palette.background.paper,
    borderRight: `solid 1px ${alpha(palette.grey[500], 0.12)}`,
    borderBottom: `solid 1px ${alpha(palette.grey[500], 0.12)}`
  }
}));


type Props = {
  poper    : UseBase;
  poperId  : string;
  anchorEl : Element;
  children : JSX.Element | JSX.Element[] | React.ReactElement<any, any>,
  sx       : object
};


const MenuPopover: React.FC<Props> = ({ poper, poperId, anchorEl, children, sx, ...other }) => {
  const
    transparent = alpha(palette.grey[500], 0.24);

  return (
    <Popover
      id              = {poperId}
      open            = {poper.open}
      anchorEl        = {anchorEl}
      onClose         = {poper.setClose}
      anchorOrigin    = {{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin = {{ vertical: 'top', horizontal: 'right' }}
      PaperProps      = {{
        sx: {
          mt: 1.5,
          ml: 0.5,
          overflow: 'inherit',
          boxShadow: `0 0 2px 0 ${transparent}, 0 20px 40px -4px ${transparent}`,
          border: `solid 1px ${palette.grey[500_8]}`,
          width: 200,
          ...sx
        }
      }}
      {...other}
    >
      <ArrowStyle className="arrow" />
      {
        children
      }
    </Popover>
  );
};

export default MenuPopover;
