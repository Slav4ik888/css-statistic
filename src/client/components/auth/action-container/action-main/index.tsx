import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getErrors } from '../../../../redux/selectors/ui';
import { getLoadingUser } from '../../../../redux/selectors/user';
import { State } from '../../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// Components
import CircularProgress from '../../../buttons/circular-progress';
// Types
import { Errors } from '../../../../../types';
// Styles
import { FlexDirection } from '../../../../utils/styles';
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  button: {
    mt: 3,
    mb: 2,
    backgroundColor: theme.palette.primary.light
  }
});


type Props = {
  loading: boolean;
  errors: Errors;
  disabled?: boolean;
  onSubmit?: (e: any) => void;
}

// Кнопка "Войти"
const ActionMain: React.FC<Props> = ({ loading, errors, disabled, onSubmit }) => {
  const sx = useStyles(useTheme());
  const nameBtn = `Войти`;

  return (
    <Box sx={{ mt: 3}}>
      {
        errors?.general && (
          <Typography variant="body2" sx={{ color: `red`, mt: 1.5 }}>
            {errors?.general}
          </Typography>
        )
      }
      <Button
        type="submit" variant="contained" fullWidth sx={sx.button}
        disabled={loading || disabled}
      >
        {
          nameBtn
        }
        <CircularProgress loading={loading} />
      </Button>
    </Box>
  )
};

const mapStateToProps = (state: State) => ({
  loading: getLoadingUser(state),
  errors: getErrors(state),
});

export default connect(mapStateToProps)(ActionMain);
