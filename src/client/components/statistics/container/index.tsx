import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import SelectDates from '../select-dates';
import ShowResult from '../show-result';
// Functions
import { useOpen } from '../../../utils/hooks/hooks';



const StatisticsCnt: React.FC = () => {
  const result = useOpen();

  return (
    <Box sx={{ display: `flex` }}>
      <SelectDates hookResult={result} /> 
      <ShowResult  hookResult={result} /> 
    </Box>
  );
};

export default StatisticsCnt;