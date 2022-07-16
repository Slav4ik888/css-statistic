import * as React from 'react';
// MUI Stuff
import { IconButton, Tooltip, Box } from '@mui/material';
// Icons
import Delete from '@mui/icons-material/DeleteOutline';
// Components
import DialogConfirm from '../../dialogs/dialog-confirm';
// Functions
import { useValue } from '../../../utils/hooks';
// Types
import { ConfirmType, ConfirmElemType } from '../../../../types';



type Props = {
  type  : ConfirmElemType;
  onDel : () => void;
};


const DelBtn: React.FC<Props> = ({ type, onDel }) => {
  const
    confirm      = useValue(),
    typeOk       = ConfirmType.DEL || ConfirmType.UNFASTEN,
    titleStart   = `Удалить`,
    titleConfirm = titleStart + ` ${type}`;

  
  const handleDel = () => {
    onDel();
    confirm.setClose();
  };

  
  return (
    <Box>
      <Tooltip title={titleStart} arrow enterDelay={1000} enterNextDelay={1000}>
        <IconButton onClick={() => confirm.setOpen()}>
          <Delete />
        </IconButton>
      </Tooltip>

      <DialogConfirm
        open     = {confirm.open}
        typeOk   = {typeOk}
        title    = {titleConfirm}
        onOk     = {handleDel}
        onCancel = {confirm.setClose}
      />
    </Box>
  );
};

export default DelBtn;
