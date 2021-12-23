import * as React from 'react';
// MUI Stuff
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
// Components
// Functions
import { getDbs } from '../../../utils/files/get-dbs';
// Types
// Styles
import { FlexDirection } from '../../../utils/styles';
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN,
    p: 2
  },
});


type Props = {
  
};


const StatDbs: React.FC<Props> = ({  }) => {
  const sx = useStyles(useTheme());

  return (
    <Box sx={sx.root}>
    </Box>
  );
};

export default StatDbs;