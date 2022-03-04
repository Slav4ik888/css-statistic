import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Functions
// import { useOpen } from '../../../hooks';
import validateAndSubmit from '../../';
import { Validator } from '../../../../../types';
import { UseOpen } from '../../../../../client/utils/hooks/types';

type Props = {
  type      : Validator;
  data      : object;
  exit?     : boolean;
  hookOpen? : UseOpen;
  onError   : (bool: any) => void;
  onSubmit  : () => void;
}
const ComponentMock: React.FC<Props> = ({ type, data, hookOpen, exit, onError, onSubmit }) => {

  // const hookOpen = useOpen();
  
  const handleSubmit = () => {
    validateAndSubmit(type, data, onSubmit, onError, hookOpen, exit);
  };

  return (
    <Box id="id" onClick={handleSubmit}>
      
    </Box>
  );
};

export default ComponentMock;
