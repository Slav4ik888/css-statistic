import * as React from 'react';
// MUI Stuff 
import { Tooltip, TextField } from '@mui/material';
// Components
import GridWrap from '../../grid-wrap';
import BoxWrap from '../../box-wrap';
// Functions
import { getStrNumber, toNumber } from '../../../../../utils/numbers';
import { useValue } from '../../../../utils/hooks';
// Types & Styles
import { Errors, GridStyle } from '../../../../../types';
import { useTheme } from '@emotion/react';
import { Themes } from '../../../../utils/styles';



const useStyles = (theme: Themes) => ({
  textField: {
    backgroundColor: theme.cardBlock.textfield.background
  }
});


type Props = {
  grid?         : GridStyle;
  box?          : boolean;
  // Tooltip
  toolTitle?    : string;
  // TextField
  label         : string;
  fullWidth?    : boolean;
  small?        : boolean;
  shrink?       : boolean;
  defaultValue? : number | string;
  disabled?     : boolean;
  errorField?   : string;
  sxField?      : object;
  autoFocus?    : boolean;
  changesValue? : number; // If value can be changes in any place, but not here
  // Control
  errors?       : Errors;
  onClick?      : () => void;
  onBlur?       : (v: number) => void;
  onCallback?   : () => void;
};

/**
 * Поле number, отображается как текст, но отдаёт значение number
 */
export const TextFieldCheckNumber: React.FC<Props> = (props) => {
  const
    { box, autoFocus, toolTitle, label, small, shrink, defaultValue, changesValue, errors, errorField, sxField, disabled, fullWidth, onBlur, onClick, onCallback } = props,
    sx       = useStyles(useTheme() as Themes),
    focusRef = React.useRef(null),
    S        = useValue(getStrNumber(String(defaultValue) || `0`)),
    Wrap     = box ? BoxWrap : GridWrap;

  
  React.useEffect(() => { autoFocus && focusRef.current.focus(); }, []);
  React.useEffect(() => { changesValue !== undefined && S.setValue(String(changesValue)); }, [changesValue]);


  const handleChange = (e: any) => {
    if (disabled) return null;
    S.setValue(getStrNumber(e.target.value));

    onCallback && onCallback();
    if (e.keyCode === 13 || e.keyCode === 27) {
      onBlur && onBlur(toNumber(S.value));
    }
  };


  const handleBlur = () => {
    onCallback && onCallback();
    onBlur && onBlur(toNumber(S.value));
  };


  return (
    <Wrap {...props}>
      <Tooltip title={toolTitle || ""} arrow enterDelay={1000} enterNextDelay={1000}>
        <>
          <TextField
            label           = {label}
            type            = "text"
            fullWidth       = {fullWidth}
            size            = {small ? "small" : "medium"}  
            sx              = {{ ...sx.textField, ...sxField }}
            disabled        = {disabled}
            value           = {S.value}
            onChange        = {handleChange}
            onClick         = {onClick}
            onBlur          = {handleBlur}
            InputLabelProps = {{ shrink }}
            error           = {errors?.[errorField] ? true : false}
            helperText      = {errors?.[errorField]}
          />
        </>
      </Tooltip>
    </Wrap>
  )
};
