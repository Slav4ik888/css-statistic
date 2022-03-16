import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Functions
import { getShortType } from '../../../ref-books/utils/get-short-type';
import { getPrepearedPhone } from '../../../ref-books/utils/get-prepeared-phone';
// Types
import { Phone } from '../../../../../types';
// Styles
import { FlexDirection, TextAlign } from '../../../../utils/styles';
import { useTheme } from '@emotion/react';



const useStyles = (theme) => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN,
    textAlign: TextAlign.LEFT,
    width: `220px`,
    maxWidth: `220px`,
    p: 0.5
  },
  row: {
    display: `flex`,
    alignItems: `center`,
    pl: 1,
  },
  type: {
    width: `56px`,
    maxWidth: `56px`,
  },
  phone: {
    width: `164px`,
    maxWidth: `164px`,
    p: 0,
  }
});



type Props = {
  phones: Array<Phone>;
};


// Cell with phones list
const PhonesContent: React.FC<Props> = ({ phones }) => {
  const sx = useStyles(useTheme());

  return (
    <Box sx={sx.root}>
      {
        phones.map((phone, i) => <Box key={phone.number + i}
          sx={sx.row}
        >
          <Box sx={sx.type}>{getShortType(phone.type)}</Box>
          <Box sx={sx.phone}>{getPrepearedPhone(phone.number)}</Box>
        </Box>)
      }
    </Box>
  );
};


export default PhonesContent;
