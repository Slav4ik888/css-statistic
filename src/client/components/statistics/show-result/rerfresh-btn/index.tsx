import * as React from 'react';
// MUI Stuff
import { IconButton } from '@mui/material';
// Icons
import RefreshIcon from '@mui/icons-material/Refresh';
// Types & Consts & Styles
import { UseValue } from '../../../../utils/hooks';
import { Position, Themes } from '../../../../utils/styles';
import { useTheme } from '@emotion/react';



const useStyles = (theme: Themes) => ({
  root: {
    position: Position.ABS,
    top: `48px`,
    right: `50px`,
    color: theme.paper.title.color
  }
});


type Props = {
  hookResult : UseValue<any>;
};


const RefreshBtn: React.FC<Props> = ({ hookResult }) => {
  const sx = useStyles(useTheme() as Themes);

  return (
    <IconButton onClick={() => hookResult.setClose()} sx={sx.root}>
      <RefreshIcon />
    </IconButton>
  );
};

export default RefreshBtn;