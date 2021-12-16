import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import Title from './title';
import Table from './table';
// Types
// Styles
import { useTheme } from '@emotion/react';
import { FlexDirection } from '../../../../utils/styles';


const useStyles = (theme) => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN
  }});


type Props = {
  
};


const TableCnt: React.FC<Props> = ({  }) => {
  const sx = useStyles(useTheme());


  return (
    <Box sx={sx.root}>
      <Title /> 
      <Table />
    </Box>
  );
};

export default TableCnt;