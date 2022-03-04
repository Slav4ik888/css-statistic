import * as React from 'react';
// MUI Stuff
import { Button, Divider, Box } from '@mui/material';
// Components
import FlexDivider from '../flex-divider';
import DialogConfirm from '../../dialogs/dialog-confirm';
import CancelSubmitBtn from '../../buttons/cancel-submit-btn/cancel-submit-btn';
// Functions
import { useOpen } from '../../../utils/hooks/hooks';
// Types
import { UseOpen } from '../../../utils/hooks/types';
import { ConfirmType } from '../../../../types';
// Styles
import { FlexDirection } from '../../../utils/styles';
import { useTheme } from '@emotion/react';



const useStyles = (theme) => ({
  root: {
    display        : `flex`,
    flexDirection  : FlexDirection.COLUMN,
    alignItems     : `flex-end`,
    mt             : 4,
    py             : 2
  },
  divider: {
    width          : `100%`,
    mb             : 4
  },
  content: {
    display        : `flex`,
    justifyContent : `space-between`,
    width          : `100%`
  },
  delete: {
    color          : `red`
  }
});


type Props = {
  loading         : boolean;
  disabledDelete? : boolean;
  hookOpen        : UseOpen;
  onClose?        : () => void;
  onDel?          : () => void;
  onSubmit        : () => void;
};


const Actions: React.FC<Props> = ({ loading, disabledDelete, hookOpen, onClose, onDel, onSubmit }) => {
  const
    sx       = useStyles(useTheme()),
    confirm  = useOpen(),
    disabled = !hookOpen.isChange;

  const handleDel = () => {
    confirm.setClose();
    hookOpen.setClose();
    if (onClose) onClose();
    onDel();
  };

  
  return (
    <Box sx={sx.root}>
      <Divider sx={sx.divider} />
      <Box sx={sx.content}>
        {
          onDel ? <Button
            variant  = "outlined"
            disabled = {disabledDelete}
            onClick  = {confirm.setOpen}
            sx       = {sx.delete}
          >
            Удалить
          </Button> : <FlexDivider />
        }
        <CancelSubmitBtn
          loading  = {loading}
          disabled = {disabled}
          onCancel = {onClose}
          onSubmit = {onSubmit}
        />
      </Box>

      <DialogConfirm
        open     = {confirm.open}
        typeOk   = {ConfirmType.DEL}
        title    = 'Подтверждение удаления'
        onOk     = {handleDel}
        onCancel = {confirm.setClose}
      />
    </Box>
  );
};

export default Actions;
