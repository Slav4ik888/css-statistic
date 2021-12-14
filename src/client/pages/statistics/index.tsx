import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import StatisticsCnt from '../../components/statistics/container';
// Types
import { fcc } from '../../utils/styles';


const StatisticsPage: React.FC = () => {

  return (
    <Box sx={{ ...fcc }}>
      <StatisticsCnt /> 
    </Box>
  );
};

export default StatisticsPage;