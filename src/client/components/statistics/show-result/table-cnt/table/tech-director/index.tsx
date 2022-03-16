import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import Title from '../../../../../tables/statistic/title';
import Head from '../../../../../tables/statistic/head';
import Body from '../../../../../tables/statistic/body';
// Functions
import getTableDataTotalTechDirector from './get-total-tech-director';
// Types
import { TableHeadType, TechDirector } from '../../../../../../../types';
// Styles
import { useTheme } from '@emotion/react';
import { FlexDirection } from '../../../../../../utils/styles';


const useStyles = (theme) => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN
  }
});



type Props = {
  data: TechDirector;
};


const TehnicalDirector: React.FC<Props> = ({ data }) => {
  const sx = useStyles(useTheme());

  const TotalTechDirector = getTableDataTotalTechDirector(data);

  return (
    <Box sx={sx.root}>
      <Title title="Технический директор" />

      <Head
        type = {TableHeadType.PRIMARY}
        data = {TotalTechDirector}
      />

      <Body
        data = {TotalTechDirector}
      />
    </Box>
  );
};

export default TehnicalDirector;