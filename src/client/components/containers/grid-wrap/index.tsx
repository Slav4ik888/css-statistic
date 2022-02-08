import * as React from 'react';
// MUI Stuff 
import Grid from '@mui/material/Grid';
// Types
import { GridStyle } from '../../../../types';



type Props = {
  grid?      : GridStyle;
  children?  : JSX.Element | JSX.Element[];
};


const GridWrap: React.FC<Props> = ({ grid, children }) => (
  <Grid item xs={grid?.xs || 12} sm={grid?.sm || 3} sx={grid?.sx}>
    {
      children
    }
  </Grid>
);

export default GridWrap;
