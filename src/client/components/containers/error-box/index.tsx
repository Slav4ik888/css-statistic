import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getErrors } from '../../../redux/selectors/ui';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import { Box } from '@mui/material/';
// Types
import { Errors } from '../../../../types';


type Props = {
  field   : string;
  sx?     : object;
  errors? : Errors;
};

const ErrorBox: React.FC<Props> = ({ field, sx, errors }) => {
  if (!errors?.[field]) return null;


  return (
    <Box sx={{ width: `100%`, ...sx }}>
      <Box
        sx={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          width: `100%`,
          fontSize: `0.8rem`,
          color: `red`
        }}
      >
        {
          errors?.[field]
        }
      </Box>
    </Box>
  )
};

const mapStateToProps = (state: State) => ({
  errors: getErrors(state)
});

export default connect(mapStateToProps)(ErrorBox);
