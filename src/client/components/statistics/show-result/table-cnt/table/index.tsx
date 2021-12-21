import * as React from 'react';
// MUI Stuff
import Paper from '@mui/material/Paper';
// Components
import TehnicalIndividual from './tehnical-individual';
import HeadOfTehnicalDepartment from './head-of-tehnical';
import TehnicalDirector from './tech-director';
// Types
import { CalcResults } from '../../../../../../types';
// Styles
import { useTheme } from '@emotion/react';
import { FlexDirection } from '../../../../../utils/styles';



const useStyles = (theme) => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN,
    p: 2
  },
});


type Props = {
  calcResults: CalcResults;
};


const Table: React.FC<Props> = ({ calcResults }) => {
  const sx = useStyles(useTheme());

  return (
    <Paper sx={sx.root}>
      <TehnicalIndividual       data={calcResults.individual} />
      <HeadOfTehnicalDepartment data={calcResults.headOfTechnical} />
      <TehnicalDirector         data={calcResults.techDirector} />
    </Paper>
  );
};

export default Table;