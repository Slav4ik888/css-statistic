import * as React from 'react';
// MUI Stuff
import Button from '@mui/material/Button';
import CircularProgress from '../circular-progress/circular-progress';
// Styles
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  cancel: {
    // color: theme.palette.secondary.main,
    mr: 2
  },
  submit: {
    backgroundColor: theme.palette.primary.light,
  }
});



type Props = {
  type?: "submit";
  onCancel?: () => void;
  onSubmit?: (e: any) => void;
  submitText?: string;
  disabled?: boolean;
  loading?: boolean;
};


const CancelSubmitBtn: React.FC<Props> = ({ type, onCancel, onSubmit, submitText, disabled, loading }) => {
  const sx = useStyles(useTheme());

  const handleSubmit = (e) => {
    if (!type) onSubmit(e)
  };

  
  return (
    <>
      {
        onCancel && <Button
          onClick={onCancel}
          variant="outlined"
          sx={sx.cancel}
        >
          Отмена
        </Button>
      }
      
      <Button
        type={type || "button"}
        onClick={handleSubmit}
        disabled={disabled || loading}
        variant="contained"
        sx={sx.submit}
      >
        {
          submitText ? submitText : `Сохранить`
        }
        
        <CircularProgress size={30} loading={loading} />
        
      </Button>
    </>
  )
};


export default CancelSubmitBtn;
