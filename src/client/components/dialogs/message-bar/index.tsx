import * as React from 'react';
// Readux Stuff
import { connect } from 'react-redux';
import { clearMessage } from '../../../redux/actions/ui';
import { getMessage } from '../../../redux/selectors/ui';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
// Types
import { Message } from '../../../../types/index';
// Styles
import { useTheme } from '@emotion/react';



const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const useStyles = (theme) => ({
  root: {
    '& .MuiAlert-filledSuccess': {
      color: `#146900`,
      backgroundColor: `#a9e09d`, // `#75c563`,
      '&:hover': {
        // backgroundColor: fade(`#75c563`, 0.85),
      },
    },
    '& .MuiAlert-filledWarning': {
      color: `#863800`,
      backgroundColor: `#ffc592`, // `#bb7000`,
      '&:hover': {
        // backgroundColor: fade(`#f5776e`, 0.85),
      },
    },
    '& .MuiAlert-filledError': {
      color: `#8e0000`,
      backgroundColor: `#eca0a0`,
      '&:hover': {
        // backgroundColor: fade(`#f5776e`, 0.85),
      },
    },
  },
  snack: {
    '& .MuiAlert-icon': { mr: { xs: 3, sm: 4 } },
    fontSize: { xs: `0.9rem`, sm: `1rem` },
    alignItems: `center`,
    lineHeight: { xs: 1.5, sm: 1.7 },
    pt: { xs: 1, sm: 2 },
    pr: { xs: 3, sm: 4 },
    pb: { xs: 1, sm: 2 },
    pl: { xs: 3, sm: 4 },
    // backgroundColor: theme.palette.secondary.light,
    // color: theme.palette.primary.main,
    width: { xs: `100%`, sm: `600px` },
    zIndex: 2000,
  }
});



type Props = {
  message: Message;
  clearMessage: () => void;
}

const MessageBar: React.FC<Props> = (props: Props) => {
  const { message, clearMessage } = props;

  if (!message?.message) return null;
  const sx = useStyles(useTheme());

  const [isSnack, setIsSnack] = React.useState(false);
  React.useEffect(() => {
    if (message.message) {
      setIsSnack(true);
    }
  }, [message]);

  const handleCloseMessageBar = () => {
    clearMessage();
    setIsSnack(false);
  };

  return (
    <MuiSnackbar
      open={isSnack}
      anchorOrigin={{ vertical: `bottom`, horizontal: `center` }}
      autoHideDuration={message.timeout || 3000}
      onClose={handleCloseMessageBar}
      sx={sx.root}
    >
      <Alert
        onClose={handleCloseMessageBar}
        // variant="outlined"
        severity={message.type}
        sx={sx.snack}
      >
        {message.message}
      </Alert>
    </MuiSnackbar>
  );
};


const mapStateToProps = (state: State) => ({
  message: getMessage(state),
});

const mapActionsToProps = {
  clearMessage,
};

export default connect(mapStateToProps, mapActionsToProps)(MessageBar);
