import * as React from 'react';
// MUI Stuff
import { Tooltip, MenuItem as MuiMenuItem, Divider } from '@mui/material';


type Props = {
  id?        : string;
  toolTitle? : string;
  children   : any | JSX.Element | JSX.Element[];
  divider?   : boolean;
  disabled?  : boolean;
  onClick?   : (e: any) => void;
};


const MenuItem: React.FC<Props> = ({ id, disabled, toolTitle, children, divider, onClick }) => (
  <>
    <MuiMenuItem id={id || ""} disabled={disabled} onClick={onClick}>
      <Tooltip title={toolTitle || ''} arrow enterDelay={1000} enterNextDelay={1000}>
        {
          children
        }
      </Tooltip>
    </MuiMenuItem>
    {
      divider && <Divider sx={{ my: 0.5 }} />
    }
  </>
);

export default MenuItem;
