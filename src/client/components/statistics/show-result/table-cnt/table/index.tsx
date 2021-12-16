import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import TehnicalIndividual from './tehnical-individual';
import HeadOfTehnicalDepartment from './head-of-tehnical';
import TehnicalDirector from './tehnical-director';
// Types & Consts
import mockTehnicalIndivData from '../../../../mocks/data/tehnical-individual-data';
// Styles
import { useTheme } from '@emotion/react';
import { FlexDirection } from '../../../../../utils/styles';


const useStyles = (theme) => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN
  },
});


type Props = {
  
};


const Table: React.FC<Props> = ({  }) => {
  const sx = useStyles(useTheme());

  const tehnicalIndivData = mockTehnicalIndivData;
  console.log('tehnicalIndivData: ', tehnicalIndivData);

  return (
    <Box sx={sx.root}>
      <TehnicalIndividual data={tehnicalIndivData} />
      <HeadOfTehnicalDepartment />
      <TehnicalDirector />
    </Box>
  );
};

export default Table;