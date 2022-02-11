import * as React from 'react';
// MUI Stuff
import { Button, Dialog, DialogTitle, DialogActions } from '@mui/material/';
// Components
import { ConfirmType } from '../../../../types/index';
// Styles
import { useTheme } from '@emotion/react';


const useStyles = (theme, typeOk: ConfirmType) => {
  const exit = typeOk === ConfirmType.SAVE_EXIT;
  const confirm = typeOk === ConfirmType.CONFIRM;

  return {
    root: {
      p: 2,
      '& .MuiPaper-root': {
        margin: { xs: 0 },
        padding: { xs: 0 }
      }
    },
    cancel: {
      mr: 2,
      fontSize: `0.8rem`,
      backgroundColor : () => exit || confirm ? `` : theme.palette.primary.light,
      color           : () => exit || confirm ? theme.palette.secondary.main : ``
    },
    ok: {
      fontSize: `0.8rem`,
      backgroundColor : () => exit || confirm ? theme.palette.primary.light : ``,
      color           : () => exit || confirm ? `` : theme.palette.secondary.main
    }
  }
};


type Props = {
  typeOk   : ConfirmType;
  open     : boolean;
  title    : string;
  onOk     : () => void;
  onCancel : () => void;
};


const DialogConfirm: React.FC<Props> = ({ open, typeOk, title, onOk, onCancel }) => {
  const
    exit          = typeOk === ConfirmType.SAVE_EXIT,
    confirm       = typeOk === ConfirmType.CONFIRM,

    cancelLabel   = exit                      ? `Выйти без сохранения` : `Отменить`,
    variantOk     = exit || confirm           ? "contained"            : "outlined",
    variantCancel = variantOk === "contained" ? "outlined"             : "contained",

    sx = useStyles(useTheme(), typeOk);

  return (
    <>
      <Dialog open={open} onClose={onCancel} sx={sx.root} maxWidth="sm">
        <DialogTitle sx={{ p: { xs: 2, sm: 4 } }}>
          {title}
        </DialogTitle>

        <DialogActions sx={{ p: { xs: 2, sm: 4 } }}>
          {
            typeOk !== ConfirmType.NO_QUESTIONS ?
              <Button className='buttonCancel' variant={variantCancel} onClick={onCancel} sx={sx.cancel}>
                {cancelLabel}
              </Button> : null
          }
          <Button variant={variantOk} className='buttonOk' onClick={onOk} sx={sx.ok}>
            {typeOk}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
};

export default DialogConfirm;
