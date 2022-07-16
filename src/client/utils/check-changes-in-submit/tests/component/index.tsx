import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Functions
import { useValue } from '../../../hooks';
import checkChangesInSubmit from '../../';



type Props = {
  storeData : object;
  newData   : object;
  exit      : boolean;
  onNull    : () => void;
  onSubmit  : () => void;
};

const Component: React.FC<Props> = ({ storeData, newData, exit, onNull, onSubmit }) => {

  const hookOpen = useValue();
  
  const handleSubmit = () => {
    if (!checkChangesInSubmit(hookOpen, storeData, newData, exit)) return onNull();
    else return onSubmit();
  };

  return (
    <Box id="id" onClick={handleSubmit}>
      
    </Box>
  );
};

export default Component;
