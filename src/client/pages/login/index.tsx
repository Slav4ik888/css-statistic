import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions/user';
import { setErrors } from '../../redux/actions/ui';
import { getErrors } from '../../redux/selectors/ui';
import { State } from '../../redux/redux-types';
// MUI Stuff 
import { Avatar, CssBaseline, TextField, Grid, Box, Typography, Container } from '@mui/material';
// Icons
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// Components
import ActionMain from '../../components/auth/action-container/action-main';
import ActionHelps from '../../components/auth/action-container/action-helps/action-helps';
import Copyright from '../../components/auth/copyright';
// Functions
import validLoginData from '../../../utils/validators/login-data/login-data';
// Types, Consts,Styles
import { Errors, UserLoginData } from '../../../types';
import { FlexDirection } from '../../utils/styles';
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: FlexDirection.COLUMN,
    alignItems: 'center',
    mt: 1,
  }
});


type Props = {
  errors?    : Errors;
  history    : unknown;
  setErrors? : (errors: Errors) => void;
  userLogin? : (loginData: UserLoginData, history?: unknown) => Promise<void>;
};


const LoginPage: React.FC<Props> = ({ errors, history, setErrors, userLogin }) => {
  const sx = useStyles(useTheme());

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginData = {
      email    : data.get(`email`)    || ``,
      // mobileNumber: data.get(`mobileNumber`),
      password : data.get(`password`) || ``,
    };

    const { valid, errors } = validLoginData(loginData);
    if (!valid) setErrors(errors);
    else userLogin(loginData, history);
  };


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={sx.root}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main', boxShadow: `0px 0px 9px #6bb2dd` }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">Войти</Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                label="Email" name="email" type="email" required fullWidth autoComplete="email"
                helperText={errors?.email} error={errors?.email ? true : false}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Пароль" name="password" type="password" required fullWidth autoComplete="current-password"
                helperText={errors?.password} error={errors?.password ? true : false}
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                label="Номер телефона" name="mobileNumber" required fullWidth autoComplete="phone"
                helperText={errors?.mobileNumber} error={errors?.mobileNumber ? true : false}
              />
            </Grid> */}
          </Grid>
          

          <ActionMain onSubmit={handleSubmit} />
          <ActionHelps />
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};


const mapStateToProps = (state: State) => ({
  errors: getErrors(state),
});

const mapActionsToProps = {
  userLogin, setErrors
};

export default connect(mapStateToProps, mapActionsToProps)(LoginPage);
