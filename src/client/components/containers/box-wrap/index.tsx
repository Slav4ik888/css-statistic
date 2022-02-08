import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';


type Props = {
  children?  : JSX.Element | JSX.Element[];
  sxBox?     : object;
};


const BoxWrap: React.FC<Props> = ({ sxBox, children }) => (
  <Box sx={sxBox}>
    {
      children
    }
  </Box>
);

export default BoxWrap;
