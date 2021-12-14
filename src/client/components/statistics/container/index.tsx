import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import SelectDates from '../select-dates';
import ShowResult from '../show-result';
// Functions
// Types
// Styles
import { useTheme } from '@emotion/react';
import { useOpen } from '../../../utils/hooks/hooks';


const useStyles = (theme) => ({
  root: {
    display: `flex`
  },
});



type Props = {
  
};


const StatisticsCnt: React.FC<Props> = ({  }) => {
  const sx = useStyles(useTheme());

  const result = useOpen();

  return (
    <Box sx={sx.root}>
      <SelectDates hookResult={result} /> 
      <ShowResult  hookResult={result} /> 
    </Box>
  );
};


export default StatisticsCnt;
