import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import PhoneItemCnt from '../phone-item-cnt/phone-item-cnt';
// Types
import { Phone } from '../../../../../../types';
// Styles
import { FlexDirection } from '../../../../../utils/styles';
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN,
    mb: 1
  },
});


type Props = {
  phones   : Array<Phone>; // Список телефонов
  onChange : (phone: Phone) => void;
  onDel    : (phone: Phone) => void;
};


const PhonesLis: React.FC<Props> = ({ phones, onChange, onDel }) => {
  if (!phones?.length) return null;
  const sx = useStyles(useTheme());

  return (
    <Box sx={sx.root} >
      {
        phones.map((phone, i) => <PhoneItemCnt key={phone.number + i}
          phone    = {phone}
          onChange = {onChange}
          onDel    = {onDel}
        />)
      }
    </Box>
  );
};

export default PhonesLis;