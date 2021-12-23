import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import TestingCnt from '../../components/testing/container';
// Types
import { fcc } from '../../utils/styles';


const TestingPage: React.FC = () => {

  return (
    <Box sx={{ ...fcc }}>
      <TestingCnt /> 
    </Box>
  );
};

export default TestingPage;