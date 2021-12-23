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
import { useOpen } from '../../../utils/hooks/hooks';
// Types
import { UseOpen } from '../../../utils/hooks/types';
import { ConfirmType } from '../../../../types';


type Props = {
  hookOpen   : UseOpen;
  maxWidth?  : "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth? : boolean;
  title?     : string;
  question?  : string;
  classname? : object;
  children   : JSX.Element | any;
  onClose?   : () => void;
}


// Всплывающее окно с каким-то children
const DialogInfo: React.FC<Props> = ({ hookOpen, maxWidth = "md", fullWidth = true, title, classname, children, question, onClose }) => {
  if (!hookOpen.open || !children) return null;

  const theme = useTheme();
  const greaterSmScreen = useMediaQuery(theme.breakpoints.up('sm'));
  
  const hookConfirm = useOpen();

  const handleClose = () => {
    if (!hookOpen.isChange) {
      hookOpen.setIsChange(false);
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
    hookOpen.setIsChange(false);
    hookConfirm.setClose();
    if (onClose) return onClose(); // Если не было изменений
    hookOpen.setClose();
  };


  return (
    <Dialog
      open={hookOpen.open}
      onClose={handleClose}
      sx={{ '& .MuiDialog-paper': { m: { xs: 0 }, width: { xs: `100%` } } }}
      maxWidth={maxWidth}
      fullWidth={greaterSmScreen && fullWidth}
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
        open={hookConfirm.open}
        typeOk={ConfirmType.SAVE_EXIT}
        onOk={handleSaveChanges}
        onCancel={handleConfirmClose}
        title="У вас есть не сохранённые изменения."
      />
    </Dialog>
  );
};

export default DialogInfo;
