import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import SelectDates from '../select-dates';
import ShowResult from '../show-result';
// Functions
import { useValue } from '../../../utils/hooks';



const StatisticsCnt: React.FC = () => {
  const result = useValue();

  return (
    <Box sx={{ display: `flex` }}>
      <SelectDates hookResult={result} /> 
      <ShowResult  hookResult={result} /> 
    </Box>
  );
};

export default StatisticsCnt;
