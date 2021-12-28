import * as React from 'react';
// MUI Stuff
import Grid from '@mui/material/Grid';


type Props = {
  authenticated: boolean;
};

const RootAuthContainer: React.FC<Props> = ({ authenticated }) => {
  if (!authenticated) return null;

  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <Grid item sm />
      <Grid item sm={6}>
        Wellcome to workspace "CSS"!
      </Grid>
      <Grid item sm />
    </Grid>
  );
};

export default RootAuthContainer;