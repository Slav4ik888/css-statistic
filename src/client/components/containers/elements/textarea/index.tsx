import * as React from 'react';
// MUI Stuff 
import { Tooltip, TextareaAutosize, Box, Typography } from '@mui/material';
// Components
import GridWrap from '../../grid-wrap';
import BoxWrap from '../../box-wrap';
import ErrorBox from '../../error-box';
// Functions
import { getValueByScheme, UseGroup, changeGroup } from '../../../../utils/hooks';
// Types & Styles
import { GridStyle } from '../../../../../types';
import { useTheme } from '@emotion/react';
import { Position, Themes } from '../../../../utils/styles';



const useStyles = (theme: Themes, length: number, styleBox: any) => ({
  textField: {
    width: `100%`,
    height: `56px`,
    border: `1px solid #c4c4c4`,
    borderRadius: `4px`,
    padding: `12px`,
    fontSize: `1rem`,
    fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
    backgroundColor: theme.cardBlock.textfield.background
  },
  hiddenLabelBG: {
    position: Position.ABS,
    top: `0px`,
    left: `6px`,
    px: `5px`,
    borderTop: `1px solid ${styleBox?.backgroundColor || theme.cardBlock.textfield.background}`,
    width: () => length * 8
  },
  label: {
    position: Position.ABS,
    top: `-11px`,
    left: `4px`,
    px: `5px`,
    fontSize: `0.8rem`,
    color: `rgb(0 0 0 / 60%)`,
    // backgroundColor: theme.cardBlock.textfield.background
  }
});



type Props = {
  grid?         : GridStyle;
  box?          : boolean;
  group?        : UseGroup<any>;
  toolTitle?    : string;
  // Textarea
  label         : string;
  style?        : { box?: object; label? : object }
  defaultValue? : string | number;
  placeholder?  : string;
  disabled?     : boolean;
  minRows?      : number;
  errorField?   : string;
  // Control
  scheme        : string;
  onCallback?   : () => void;
};


const TextArea: React.FC<Props> = (props) => {
  const
    { box, label, toolTitle, defaultValue, style, minRows = 1, errorField, scheme, placeholder, disabled, group, onCallback } = props,
    sx   = useStyles(useTheme() as Themes, label.length, style?.box),
    Wrap = box ? BoxWrap : GridWrap;

  const handleChange = (e: any) => {
    if (disabled) return null;
    changeGroup(group, [{ value: e.target.value, scheme }]);
    if (onCallback) onCallback();
  };


  return (
    <Wrap {...props}>
      <Box sx={{ position: `relative` }}>
        <Tooltip title={toolTitle || ""} arrow enterDelay={1000} enterNextDelay={1000}>
        
          <TextareaAutosize
            aria-label={label}
            aria-labelledby={label}
            minRows={minRows}
            defaultValue={defaultValue || getValueByScheme(group, scheme)}
            onChange={handleChange}
            disabled={disabled}
            placeholder={placeholder}
            style={{ ...sx.textField }}
          />
        </Tooltip>
              
        <Box sx={sx.hiddenLabelBG} />
        <Typography sx={{ ...sx.label, ...style?.label }}>{label}</Typography>
      </Box>

      <ErrorBox field={errorField} />
    </Wrap>
  )
};


export default TextArea;