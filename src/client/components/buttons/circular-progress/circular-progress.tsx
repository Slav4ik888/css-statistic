
import * as React from 'react';
// MUI Stuff
import { Box, CircularProgress as Circular } from '@mui/material';
// Functions
import theme from '../../../utils/styles/themes/themes';
import { cl, Position } from '../../../utils/styles';


const styleBlock = {
  backgroundColor: `#585858`,
  opacity: `30%`,
  zIndex: 2000,
  position: Position.ABS,
  width: `100%`,
  height: `100%`,
  top: 0,
  left: 0,
}
  

type Props = {
  loading: boolean;
  size?: number;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  classname?: object;
  center?: boolean; // По центру
  block?: boolean; // Заблокировать экран подсветкой
}


const CircularProgress: React.FC<Props> = ({ loading, size = 30, top, bottom, right, left, classname,
center, block}) => {
  if (!loading) return null;
  
  
  return (
    <Box sx={cl(styleBlock, block)}>
      <Circular
        size={size}
        sx={{
          position: `absolute`,
          color: block ? `#012b3e` : theme.palette.primary.main,
          top: () => center ? `calc(50% - ${size / 2}px)` : top ? top : `0px`,
          bottom: () => bottom ? bottom : `0px`,
          left: () => center ? `calc(50% - ${size / 2}px)` : left ? left : `0px`,
          right: () => right ? right : `0px`,
          ...classname
        }}
      />
  </Box>);
}

export default CircularProgress;