import * as React from 'react';
// MUI Stuff
import { Grid, Box } from '@mui/material';
// Types
import { PermType } from '../../../../../../../../../types';
import { fcc, fc_ } from '../../../../../../../../utils/styles';


const useStyles = () => ({
  root: {
    ...fcc,
    width: `100%`,
    backgroundColor: `#d2d9dd`,
    borderRadius: `3px`,
    py: 0.5, px: 1.5,
    height: 32,
    fontSize: `0.9rem`
  },
  label: {
    ...fc_,
    width: `50%`
  },
  // border-left: 1px solid #a0adb3;
  // border-right: 1px solid #a0adb3;
  item: {
    ...fcc,
    width: `10%`
  }
});


const CredentialsHeader: React.FC = () => {
  const sx = useStyles();

  return (
    <Grid item sm={12}>
      <Box sx={sx.root}>
        <Box sx={sx.label}>Название полномочий</Box>

        <Box sx={sx.item}>Да / Нет</Box>
        <Box sx={sx.item}>{PermType.READ}</Box>
        <Box sx={sx.item}>{PermType.ADD}</Box>
        <Box sx={sx.item}>{PermType.CHANGE}</Box>
        <Box sx={sx.item}>{PermType.DEL}</Box>
      </Box>
    </Grid>
  );
};


export default CredentialsHeader;
