import * as React from 'react';
// MUI Stuff
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
// Components
import DialogTitle from '../dialog-title';
import DialogConfirm from '../dialog-confirm';
// Functions
import { UseBase, useValue } from '../../../utils/hooks';
// Types
import { ConfirmType } from '../../../../types';



const useStyles = () => ({
  root: {
    '& .MuiDialog-paper': {
      width : { xs: `100%` },
      m     : { xs: 0 }
    }
  }
});


type Props = {
  hookOpen   : UseBase;
  maxWidth?  : "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth? : boolean;
  title?     : string;
  question?  : string;
  classname? : object;
  children   : JSX.Element | any;
  onClose?   : () => void;
};


/**
 * Всплывающее окно с каким-то children
 */
const DialogInfo: React.FC<Props> = ({ hookOpen, maxWidth = "md", fullWidth = true, title, classname, children, question, onClose }) => {
  const
    sx              = useStyles(),
    theme           = useTheme(),
    greaterSmScreen = useMediaQuery(theme.breakpoints.up('sm')),
    hookConfirm     = useValue();

  
  const handleClose = () => {
    if (!hookOpen.changes) {
      hookOpen.setChanges(false);
      if (onClose) return onClose(); // Если не было изменений
      hookOpen.setClose();
    }
    hookConfirm.setOpen();
  };

  const handleSaveChanges = () => {
    hookConfirm.setClose();
    hookOpen.setConfirm(true); // Сообщаем о том, что нажали Сохранить
  };

  const handleConfirmClose = () => {
    hookOpen.setChanges(false);
    hookConfirm.setClose();
    if (onClose) return onClose(); // Если не было изменений
    hookOpen.setClose();
  };


  if (!hookOpen.open || !children) return null;

  return (
    <Dialog
      open      = {hookOpen.open}
      onClose   = {handleClose}
      sx        = {sx.root}
      maxWidth  = {maxWidth}
      fullWidth = {greaterSmScreen && fullWidth}
    >
      {
        title && <DialogTitle onClose={handleClose} children={title} question={question}/>
      }

      <DialogContent sx={{ p: 3, ...classname }}>
        {
          children
        }
      </DialogContent>
      
      <DialogConfirm
        open     = {hookConfirm.open}
        typeOk   = {ConfirmType.SAVE_EXIT}
        onOk     = {handleSaveChanges}
        onCancel = {handleConfirmClose}
        title    = "У вас есть не сохранённые изменения."
      />
    </Dialog>
  );
};

export default DialogInfo;
