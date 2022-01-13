import * as React from 'react';
// MUI Stuff
import { Grid, Box } from '@mui/material';
// Styles
import { fcc, TextAlign } from '../../../utils/styles';


const rootStyle = {
  ...fcc,
  height: `70vh`,
  textAlign: TextAlign.CENTER
};


type Props = {
  authenticated: boolean;
};


const RootAuthContainer: React.FC<Props> = ({ authenticated }) => {
  if (!authenticated) return null;

  return (
    <Grid container sx={rootStyle}>
      <Grid item sm />
      <Grid item sm={6}>
        <Box>Wellcome to workspace "CSS"!</Box>
      </Grid>
      <Grid item sm />
    </Grid>
  );
};

export default RootAuthContainer;
