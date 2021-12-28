import * as React from 'react';
// MUI Stuff
import Typography from '@mui/material/Typography';
// Components
import RecoveryPassword from './recovery-password/recovery-password';
// Functions
import { useOpen } from '../../../../../utils/hooks/hooks';



// Восстановление пароля (главный контейнер)
const RecoveryPasswordContainer: React.FC = () => {

  // Recovery password
  const hookOpen = useOpen(false);

  return (
    <>
      <Typography
        onClick={hookOpen.setOpen}
        variant="body2"
        sx={{ cursor: `pointer`, textAlign: `center` }}
      >
        Восстановить пароль
      </Typography>

      <RecoveryPassword hookOpen={hookOpen} />
    </>
  );
};


export default RecoveryPasswordContainer;
