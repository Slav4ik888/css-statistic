import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import Title from '../../../../../tables/title';
import Head from '../../../../../tables/head';
import Body from '../../../../../tables/body';
// Functions
import getTableData from './utils/get-table-data';
// Types
import { IncidentsData, TableHeadType } from '../../../../../../../types';
// Styles
import { useTheme } from '@emotion/react';
import { FlexDirection } from '../../../../../../utils/styles';


const useStyles = (theme) => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN
  },
});



type Props = {
  data: IncidentsData;
};


const TehnicalIncidents: React.FC<Props> = ({ data }) => {
  const sx = useStyles(useTheme());
  const tableData = getTableData(data);

  return (
    <Box sx={sx.root}>
      <Title title="Инженеры и техподдержка (индивидуальные)" />
      <Head type={TableHeadType.PRIMARY}   data={tableData} />
      <Head type={TableHeadType.SECONDARY} data={tableData} />
      <Body data={tableData} />
    </Box>
  );
};

export default TehnicalIncidents;