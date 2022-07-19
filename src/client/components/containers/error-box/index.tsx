import * as React from 'react';
// MUI Stuff
import { Box } from '@mui/material';
// Types
import { fcc } from '../../../utils/styles';
import { Errors } from '../../../../types';



type Props = {
  field  : string;
  sx?    : object;
  errors : Errors;
};


const ErrorBox: React.FC<Props> = ({ field, sx, errors }) => {

  if (!errors?.[field]) return null;

  return (
    <Box sx={{ width: `100%`, ...sx }}>
      <Box
        sx={{
          ...fcc,
          width    : `100%`,
          fontSize : `0.8rem`,
          color    : `red`
        }}>
        {
          errors?.[field]
        }
      </Box>
    </Box>
  )
};

export default ErrorBox;
