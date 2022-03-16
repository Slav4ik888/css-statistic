import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import Title from '../../../../../tables/statistic/title';
import Head from '../../../../../tables/statistic/head';
import Body from '../../../../../tables/statistic/body';
// Functions
import getTableDataTotalTechnical from './utils/get-total-technical';
import getTableDataAmountOfServices from './utils/get-amount-of-services';
// Types
import { TableHeadType, HeadOfTechnical } from '../../../../../../../types';
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
  data: HeadOfTechnical;
};


const HeadOfTehnicalDepartment: React.FC<Props> = ({ data }) => {
  const sx = useStyles(useTheme());
  const TotalTechnical   = getTableDataTotalTechnical(data);
  const AmountOfServices = getTableDataAmountOfServices(data);


  return (
    <Box sx={sx.root}>
      <Title title="Руководитель производственного отделения" />
      <Head type={TableHeadType.PRIMARY}  data={TotalTechnical} />
      <Body data={TotalTechnical} />

      <Head type={TableHeadType.PRIMARY}   data={AmountOfServices} />
      <Head type={TableHeadType.SECONDARY} data={AmountOfServices} />
      <Body data={AmountOfServices} />
    </Box>
  );
};

export default HeadOfTehnicalDepartment;