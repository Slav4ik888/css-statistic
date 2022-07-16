import * as React from 'react';
// MUI Stuff
import Typography from '@mui/material/Typography';
// Components
import RecoveryPassword from './recovery-password/recovery-password';
// Functions
import { useValue } from '../../../../../utils/hooks';



/**
 * Восстановление пароля (главный контейнер)
 */
const RecoveryPasswordContainer: React.FC = () => {
  const hookOpen = useValue();

  return (
    <>
      <Typography
        onClick = {() => hookOpen.setOpen()}
        variant = "body2"
        sx      = {{ cursor: `pointer`, textAlign: `center` }}
      >
        Восстановить пароль
      </Typography>

      <RecoveryPassword hookOpen={hookOpen} />
    </>
  );
};

export default RecoveryPasswordContainer;
