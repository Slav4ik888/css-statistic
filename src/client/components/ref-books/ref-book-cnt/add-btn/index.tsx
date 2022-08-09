import * as React from 'react';
// MUI Stuff
import { Box } from '@mui/material';
// Components
import AddBtn from '../../../buttons/add-btn';



const useStyles = () => ({
  root: {
    display        : `flex`,
    justifyContent : `flex-end`
  }
});


type Props = {
  onAdd: () => void;
};

/**
 * Button to add в Справочник нового элемента
 */
const AddBtnLogic: React.FC<Props> = ({ onAdd }) => {
  const
    sx = useStyles();

  return (
    <Box sx={sx.root} >
      <AddBtn onAdd={onAdd} />
    </Box>
  );
};

export default AddBtnLogic;
