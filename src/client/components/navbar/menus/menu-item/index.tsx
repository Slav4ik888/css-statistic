import * as React from 'react';
// MUI Stuff
import { Tooltip, MenuItem as MuiMenuItem, Divider } from '@mui/material';


type Props = {
  id?        : string;
  toolTitle? : string;
  children   : any | JSX.Element | JSX.Element[];
  divider?   : boolean;
};


const MenuItem: React.FC<Props> = ({ id, toolTitle, children, divider }) => (
  <>
    <MuiMenuItem id={id || ""}>
      <Tooltip title={toolTitle = ''} arrow enterDelay={1000} enterNextDelay={1000}>
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
