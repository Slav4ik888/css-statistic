import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import PhoneItemText from './phone-item-text/phone-item-text';
import PhoneItemInput from './phone-item-input/phone-item-input';
// Functions
import { useObject, useOpen } from '../../../../../utils/hooks/hooks';
// Types
import { Phone } from '../../../../../../types';


type Props = {
  phone: Phone;
  onChange: (phone: Phone) => void;
  onDel: (phone: Phone) => void;
};

// Контейнер для телефонного номера
const PhoneItemCnt: React.FC<Props> = ({ phone, onChange, onDel }) => {

  const edit = useOpen(false);
  const hookPhone = useObject(phone);
  
  return (
    <Box sx={{ mb: 1 }}>
      <PhoneItemText hookPhone={hookPhone} edit={edit} onDel={onDel} />
      <PhoneItemInput hookPhone={hookPhone} edit={edit} onChange={onChange} />
    </Box>
  );
};

export default PhoneItemCnt;