import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';



type Props = {
  children: React.ReactNode;
};

const CardContainer: React.FC<Props> = ({ children }) => {
  
  return (
    <Box component="form" noValidate sx={{ display: `flex`, flexDirection: `column` }}>
      {
        children
      }
    </Box>
  );
};

export default CardContainer;
