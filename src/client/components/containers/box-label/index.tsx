import * as React from 'react';
// MUI Stuff 
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// Types
import { GridStyle } from '../../../../types';
// Styles
import { BaseColor, Position, TextAlign } from '../../../utils/styles';
import { useTheme } from '@emotion/react';
import { UseOpen } from '../../../utils/hooks/types';



const useStyles = (theme, styleBox, length: number) => ({
  box: {
    position: Position.REL,
    border: `1px solid ${BaseColor.DRAFT}`,
    borderRadius: `4px`,
    textAlign: TextAlign.CENTER,
    mt: 0.5,
    p: 2,
    width: `100%`,
    minHeight: `58px`,
    backgroundColor: theme.cardBlock.textfield.background
  },
  hiddenLabelBG: {
    position: Position.ABS,
    top: `-1px`,
    left: `6px`,
    px: `5px`,
    borderTop: `1px solid ${styleBox?.backgroundColor || "#dbdfe2"}`,
    width: () => length * 9
  },
  label: {
    position: Position.ABS,
    top: `-11px`,
    left: `4px`,
    px: `5px`,
    fontSize: `0.8rem`,
    color: `#98999b`,
    // backgroundColor: theme.cardBlock.textfield.background
  }
});


const tempStyle = {
  box: {},
  label: {},
  child: {}
};


type Props = {
  toolTitle? : string;
  select?    : UseOpen; // Если нужно чтобы блок убирался если открыт select
  label?     : string;
  children?  : string | JSX.Element;
  style?     : { box?: object; label? : object; child? : object; }
  text?      : string;
  onClick?   : () => void;
};



const BoxLabel: React.FC<Props> = ({ select, toolTitle, label, style = tempStyle, children, text, onClick }) => {
  if (select && select.open) return null;
  
  const sx = useStyles(useTheme(), style?.box, label?.length);

  return (
    <Tooltip title={toolTitle || ""} arrow enterDelay={1000} enterNextDelay={1000}>
      <Box sx={{ ...sx.box, ...style.box }} onClick={onClick}>
        {
          label ? <Box sx={sx.hiddenLabelBG} /> : null
        }
        {
          label ? <Typography sx={{ ...sx.label, ...style.label }}>{label}</Typography>
            : null
        }
        {
          children ? <Box sx={style.child}>
            {children}
          </Box>
            
          : <Box sx={style.child}>
              {text}
            </Box>
        }
        
      </Box>
    </Tooltip>
  )
};

export default BoxLabel;
