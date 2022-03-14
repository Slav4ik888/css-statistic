import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { sendPasswordResetEmail } from '../../../../../../redux/actions/user';
import { setErrors } from '../../../../../../redux/actions/ui';
import { State } from '../../../../../../redux/redux-types';
// MUI Stuff
import { Button, DialogContent, DialogActions, Typography, TextField } from '@mui/material';
// Components
import DialogInfo from '../../../../../dialogs/dialog-info';
import CircularProgress from '../../../../../buttons/circular-progress';
// Functions
import validEmail from '../../../../../../../utils/validators/email/email';
// Types
import { Errors } from '../../../../../../../types';
import { UseOpen } from '../../../../../../utils/hooks/types';



type Props = {
  hookOpen                : UseOpen;
  loading                 : boolean;
  errors                  : Errors;
  sendPasswordResetEmail? : (email: string) => void;
  setErrors?              : (errors: Errors) => void;
};

const RecoveryPasswod: React.FC<Props> = (props: Props) => {
  const { hookOpen, loading, errors, setErrors, sendPasswordResetEmail } = props;

  const emailRef = React.useRef<HTMLInputElement | null>(null);

  const handleSendPasswordResetEmail = () => {
    const email = emailRef?.current?.value;

    const { valid, errors } = validEmail(email);
    if (!valid) setErrors(errors);
    else {
      hookOpen.setClose();
      sendPasswordResetEmail(email);
    }
  };
  
  return (
    <DialogInfo hookOpen={hookOpen} maxWidth="xs" onClose={hookOpen.setClose} title="Восстановление пароля">
      <DialogContent>
        <Typography variant="h5" sx={{ m: { xs: 0, sm: 2 }, fontSize: { xs: `1rem` }}}>
          Введите ваш email, мы отправим на него ссылку для восстановления пароля.
        </Typography>

        <TextField fullWidth name="email" type="email" label="Введите email"
          sx={{ fontSize: { xs: `1rem` } }}
          inputRef={emailRef}
          helperText={errors?.email}
          error={errors?.email ? true : false}
        />
      </DialogContent>

      <DialogActions sx={{ pb: 1 }}>
        {
          errors?.general && (
            <Typography variant="body2" sx={{ color: `red`, fontSize: `0.8rem`, mt: 1.5 }}>
              {errors?.general}
            </Typography>
          )
        }
        <Button onClick={handleSendPasswordResetEmail} variant="contained" color="primary"
          sx={{ mr: 2 }}
          disabled={loading}
        >
          Отправить <CircularProgress loading={loading} />
        </Button>
      </DialogActions>
    </DialogInfo>
  )
};

const mapStateToProps = (state: State) => ({
  user: state.user,
  loading: state.user.loading,
  errors: state.UI.errors,
});

const mapActionsToProps = {
  sendPasswordResetEmail,
  setErrors,
};

export default connect(mapStateToProps, mapActionsToProps)(RecoveryPasswod);
