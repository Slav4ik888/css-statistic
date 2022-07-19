import * as React from 'react';
// MUI Stuff 
import { TextareaAutosize, Box, Typography } from '@mui/material';
// Components
import GridWrap from '../../grid-wrap';
import BoxWrap from '../../box-wrap';
import ErrorBox from '../../error-box';
// Functions
import { useValue } from '../../../../utils/hooks';
// Types & Styles
import { Errors, GridStyle } from '../../../../../types';
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
  // Textarea
  label         : string;
  style?        : { box?: object; label? : object }
  defaultValue? : string;
  changesValue? : string; // If value can be changes in any place, but not here
  placeholder?  : string;
  disabled?     : boolean;
  minRows?      : number;
  errorField?   : string;
  errors        : Errors;
  autoFocus?    : boolean;
  onClick?      : (e?: any) => void;
  onBlur?       : (v: string) => void;
  onCallback?   : () => void;
  onSubmit?     : (v: string) => void;
};


export const TextArea: React.FC<Props> = (props) => {
  const { box, errors, autoFocus, label, defaultValue, changesValue, style, minRows = 1, errorField, placeholder, disabled, onBlur, onClick, onCallback, onSubmit } = props;
  const
    sx       = useStyles(useTheme() as Themes, label.length, style?.box),
    focusRef = React.useRef(null),
    Wrap     = box ? BoxWrap : GridWrap,
    S        = useValue(defaultValue || ``);

  
  React.useEffect(() => { autoFocus && focusRef.current.focus(); }, []);
  React.useEffect(() => { changesValue !== undefined && S.setValue(changesValue); }, [changesValue]);


  const handlerChange = (e: any) => {
    if (disabled) return null;
    S.setValue(e.target.value);

    onCallback && onCallback();
    if (e.keyCode === 27) { // e.keyCode === 13 ||
      onSubmit && onSubmit(S.value);
      onBlur && onBlur(S.value);
    }
  };

  const handlerBlur = () => {
    onCallback && onCallback();
    onBlur && onBlur(S.value);
  };  


  return (
    <Wrap {...props}>
      <Box sx={{ position: `relative` }} onClick={onClick}>
        <TextareaAutosize
          aria-label      = {label}
          aria-labelledby = {label}
          minRows         = {minRows}
          value           = {S.value}
          disabled        = {disabled}
          placeholder     = {placeholder}
          style           = {{ ...sx.textField }}
          onChange        = {handlerChange}
          onBlur          = {handlerBlur}
        />
              
        <Box sx={sx.hiddenLabelBG} />
        <Typography sx={{ ...sx.label, ...style?.label }}>{label}</Typography>
      </Box>

      <ErrorBox field={errorField} errors={errors} />
    </Wrap>
  )
};
