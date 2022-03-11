import * as React from 'react';
// MUI Stuff
import { TextField, Button, Paper, Box } from '@mui/material';
// Components
import SelectPhoneType from './select-phone-type';
// Functions
import { useValue, useObject } from '../../../../../../utils/hooks/hooks';
import { UseOpen } from '../../../../../../utils/hooks/types';
import { getPrepearedPhone } from '../../../../utils/get-prepeared-phone';
// Types
import { Phone } from '../../../../../../../types';
// Styles
import { FlexDirection } from '../../../../../../utils/styles';
import { useTheme } from '@emotion/react';



const useStyles = (theme) => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN,
    alignItems: `center`,
    backgroundColor: `#fffff3`,
    p: 2
  },
  row: {
    display: `flex`,
    alignItems: `center`,
  },
  rowBtn: {
    display: `flex`,
    justifyContent: `flex-end`,
    width: `100%`,
    mt: 2
  },
  number: {
    ml: 1,
    p: 1,
    minWidth: `200px`
  },
  ext: {
    ml: 1,
    p: 1,
    minWidth: `100px`
  },
  description: {
    ml: 1,
    p: 1,
    minWidth: `200px`
  }
});



type Props = {
  hookPhone : { obj: Phone, setObject: (v: Phone) => void };
  edit      : UseOpen;
  onChange  : (phone: Phone) => void;
};


const PhoneItemInput: React.FC<Props> = ({ hookPhone, edit, onChange }) => {
  if (!edit.open) return null;
  const sx = useStyles(useTheme());

  const type = useObject(hookPhone.obj.type);
  const number = useValue(getPrepearedPhone(hookPhone.obj.number));
  const extRef = React.useRef(null);
  const descrRef = React.useRef(null);

  
  const handleChange = (e) => {
    const num = e.target.value;
    number.setValue(getPrepearedPhone(num));
  }

  const handleSubmit = () => {
    const updatedPhone: Phone = ({
      id: hookPhone.obj.id,
      type: type.obj,
      number: number.value,
      extension: extRef.current.value,
      description: descrRef.current.value
    });

    hookPhone.setObject(updatedPhone);
    onChange(updatedPhone);
    edit.setClose();
  }


  return (
    <Paper sx={sx.root} >
      <Box sx={sx.row}>
        <SelectPhoneType hook={type} />

        <TextField name="number" type="text" sx={sx.number}
          label="Телефонный номер"
          value={number.value} onChange={handleChange}
        />

        <TextField name="extension" type="text" sx={sx.ext}
          label="Внутр.номер"
          defaultValue={hookPhone.obj.extension} inputRef={extRef}
        />

        <TextField name="description" type="text" sx={sx.description}
          label="Примечание"
          defaultValue={hookPhone.obj.description} inputRef={descrRef}
        />
      </Box>

      <Box sx={sx.rowBtn}>
        <Button variant="outlined" color="secondary" onClick={handleSubmit}>Сохранить</Button>
      </Box>
    </Paper>
  );
};

export default PhoneItemInput;