import * as React from 'react';
// MUI Stuff
import { Button } from '@mui/material';
// Icons
import Add from '@mui/icons-material/Add';
// Types
import { useTheme } from '@emotion/react';
import { Themes } from '../../../utils/styles';



const useStyles = (theme: Themes) => ({
  root: {
    backgroundColor : theme.palette.primary.light
  }
});


type Props = {
  onAdd: () => void;
};

const AddBtn: React.FC<Props> = ({ onAdd }) => {
  const
    sx = useStyles(useTheme() as Themes);

  return (
    <Button
      variant   = 'contained'
      startIcon = {<Add />}
      sx        = {sx.root}
      onClick   = {onAdd}
    >
      добавить
    </Button>
  );
};

export default AddBtn;
