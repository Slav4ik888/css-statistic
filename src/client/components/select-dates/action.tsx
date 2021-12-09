import * as React from 'react';
// MUI Stuff
import { Box, Button, Divider } from '@mui/material';
// Functions


type Props = {
  onCalc: () => void;
};


const SelectDatesAction: React.FC<Props> = ({ onCalc }) => {
  
  return (
    <Box sx={{ my: 3 }}>
      <Divider />
      <Button
        sx={{ width: `100%`, mt: 4 }}
        variant="contained"
        color="primary"
        onClick={onCalc}
      >
        Посчитать
      </Button>
    </Box>
  );
};


export default SelectDatesAction;