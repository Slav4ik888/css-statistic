import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import StatDbs from '../stat-dbs';
// Functions
import { getPathId } from './utils';
import { useOpen } from '../../../utils/hooks/hooks';
// Types
import { TestingType } from '../../../../types';


const TestingCnt: React.FC = () => {

  const id = getPathId(window?.location?.pathname)?.value || ``;
  let Component = <Box></Box>;

  switch (id) {
    case TestingType.STATISTICS: Component = <StatDbs />
  }

  return (
    <>
      {Component}
    </>
  );
};

export default TestingCnt;