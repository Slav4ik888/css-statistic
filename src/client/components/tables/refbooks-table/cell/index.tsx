import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';


type Props = {
  sx       : object;
  children : string | React.ReactNode;
};

const Cell: React.FC<Props> = ({ sx, children }) => (
  <Box sx={{ p: 0.5, ...sx }}>{children}</Box>
);

export default Cell;
