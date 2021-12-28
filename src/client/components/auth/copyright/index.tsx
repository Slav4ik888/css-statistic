import * as React from 'react';
import { RouteType } from '../../../utils/routes/routes';
// MUI Stuff
import { Typography, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// Consts
import { cfg } from '../../../../../config';


export default function Copyright(props: any) {
  const theme = useTheme();
  const greaterSmScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const title = greaterSmScreen ? cfg.SITE_TITLE.full : cfg.SITE_TITLE.short;

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href={RouteType.ROOT}>
        {
          title
        }
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}