import * as React from 'react';
// MUI Stuff
import Grid from '@mui/material/Grid';
// Components
import SelectDates from '../../../components/statistics/select-dates';
// Functions


type Props = {
  authenticated: boolean;
};

const RootAuthContainer: React.FC<Props> = ({ authenticated }) => {
  if (!authenticated) return null;

  return (
    <>
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid item sm />
        <Grid item sm={6}>
          {/* <SelectDates />  */}
        </Grid>
        <Grid item sm />
      </Grid>
    </>
  );
};


export default RootAuthContainer;
