import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import RecoveryPasswordContainer from './recovery-password-container/recovery-password-container';
// Types


type Props = {
}

const ActionHelps: React.FC<Props> = () => {
  return (
    <Box sx={{ m: 1, p: 1 }}>
      <RecoveryPasswordContainer />
    </Box>
  )
};

export default ActionHelps;