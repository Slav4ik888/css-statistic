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



const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const useStyles = () => ({
  root: {
    '& .MuiAlert-filledSuccess': {
      color           : `#146900`,
      backgroundColor : `#a9e09d`,
    },
    '& .MuiAlert-filledWarning': {
      color           : `#863800`,
      backgroundColor : `#ffc592`,
    },
    '& .MuiAlert-filledError': {
      color           : `#8e0000`,
      backgroundColor : `#eca0a0`,
    },
  },
  snack: {
    '& .MuiAlert-icon': { mr: { xs: 3, sm: 4 } },
    fontSize   : { xs: `0.9rem`, sm: `1rem` },
    alignItems : `center`,
    lineHeight : { xs: 1.5, sm: 1.7 },
    width      : { xs: `100%`, sm: `600px` },
    zIndex     : 2000,
    pt: { xs: 1, sm: 2 },
    pr: { xs: 3, sm: 4 },
    pb: { xs: 1, sm: 2 },
    pl: { xs: 3, sm: 4 }
  }
});



type Props = {
  message: Message;
  clearMessage: () => void;
}

const MessageBar: React.FC<Props> = ({ message, clearMessage }) => {
  const
    sx = useStyles(),
    [isSnack, setIsSnack] = React.useState(false);

  React.useEffect(() => {
    message?.message && setIsSnack(true);
  }, [message, message?.message]);

  const handleCloseMessageBar = () => {
    clearMessage();
    setIsSnack(false);
  };

  if (!message?.message || typeof message?.message !== `string`) return null;


  return (
    <MuiSnackbar
      open             = {isSnack}
      anchorOrigin     = {{ vertical: `bottom`, horizontal: `center` }}
      autoHideDuration = {message.timeout || 3000}
      sx               = {sx.root}
      onClose          = {handleCloseMessageBar}
    >
      <Alert
        severity = {message.type}
        sx       = {sx.snack}
        onClose  = {handleCloseMessageBar}
      >
        {message.message}
      </Alert>
    </MuiSnackbar>
  );
};


const mapStateToProps = (state: State) => ({
  message: getMessage(state)
});

export default connect(mapStateToProps, { clearMessage })(MessageBar);
