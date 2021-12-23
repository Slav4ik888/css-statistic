import * as React from 'react';
// MUI Stuff
import { IconButton } from '@mui/material';
// Icons
import RefreshIcon from '@mui/icons-material/Refresh';
// Types & Consts
import { UseOpen } from '../../../../utils/hooks/types';
// Styles
import { Position } from '../../../../utils/styles';
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  root: {
    position: Position.ABS,
    top: `48px`,
    right: `50px`,
    color: theme.paper.title.color
  }
});


type Props = {
  hookResult : UseOpen;
};


const RefreshBtn: React.FC<Props> = ({ hookResult }) => {
  const sx = useStyles(useTheme());

  return (
    <IconButton onClick={hookResult.setClose} sx={sx.root}>
      <RefreshIcon />
    </IconButton>
  );
};

export default RefreshBtn;