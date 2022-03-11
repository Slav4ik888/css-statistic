import * as React from 'react';
// MUI Stuff
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
// Icons
// import Delete from '@mui/icons-material/Delete';
import Delete from '@mui/icons-material/Close';
// Components
import DialogConfirm from '../../../../../dialogs/dialog-confirm';
// Functions
import { useOpen } from '../../../../../../utils/hooks/hooks';
import { UseOpen } from '../../../../../../utils/hooks/types';
import { getPrepearedPhone } from '../../../../utils/get-prepeared-phone';
// Types
import { ConfirmType, Phone } from '../../../../../../../types';
// Styles
import { TextAlign } from '../../../../../../utils/styles';
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  root: {
    display: `flex`,
    alignItems: `center`
  },
  box: {
    border: `1px solid #c4c4c4`,
    borderRadius: `4px`,
    textAlign: TextAlign.CENTER,
    padding: `8px`,
    minHeight: `42px`
  },
  type: {
    minWidth: `150px`
  },
  number: {
    ml: 1,
    minWidth: `180px`,
  },
  ext: {
    ml: 1,
    minWidth: `80px`,
  },
  description: {
    ml: 1,
    minWidth: `200px`,
  }
});



type Props = {
  hookPhone : { obj: Phone, setObject: (v: Phone) => void };
  edit      : UseOpen;
  onDel     : (phone: Phone) => void;
};


const PhoneItemText: React.FC<Props> = ({ hookPhone, edit, onDel }) => {
  if (edit.open) return null;
  const sx = useStyles(useTheme());

  const confirm = useOpen();

  const handleOpen = () => edit.setOpen();

  const handleDel = () => {
    onDel(hookPhone.obj);
    confirm.setClose();
  };


  return (
    <Box sx={sx.root}>
      <Box sx={sx.root} onClick={handleOpen}>
        <Box sx={{ ...sx.box, ...sx.type }}>{hookPhone.obj.type}</Box>
        <Box sx={{ ...sx.box, ...sx.number }}>{getPrepearedPhone(hookPhone.obj.number)}</Box>
        <Box sx={{ ...sx.box, ...sx.ext }}>{hookPhone.obj.extension}</Box>
        <Box sx={{ ...sx.box, ...sx.description }}>{hookPhone.obj.description}</Box>
      </Box>

      <IconButton onClick={confirm.setOpen}>
        <Delete />
      </IconButton>

      <DialogConfirm
        open     = {confirm.open}
        typeOk   = {ConfirmType.DEL}
        title    = {`Удалить выбранный телефон`}
        onOk     = {handleDel}
        onCancel = {confirm.setClose}
      />
    </Box>
  );
};

export default PhoneItemText;