import * as React from 'react';
// MUI Stuff
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
// Components
// Functions
// Types
// Styles
import { themes, cl, FlexDirection, Position } from '../../../utils/styles';
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  root: {
    display: `flex`
  },
});



type Props = {
  
};


const Container: React.FC<Props> = ({  }) => {
  const sx = useStyles(useTheme());


  return (
    <Box sx={sx.root}>
      
    </Box>
  );
};

export default Container;