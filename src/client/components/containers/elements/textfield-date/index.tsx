import * as React from 'react';
// MUI Stuff 
import { Tooltip, TextField } from '@mui/material';
// Components
import GridWrap from '../../grid-wrap';
import BoxWrap from '../../box-wrap';
// Functions
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
  sxBox?        : object;
  toolTitle?    : string;
  label         : string;
  type?         : "datetime-local" | "date";
  fullWidth?    : boolean;
  defaultValue? : string | number;
  changesValue? : string | number; // If value can be changes in any place, but not here
  disabled?     : boolean;
  errorField?   : string;
  errors?       : Errors;
  onClick?      : () => void;
  onBlur?       : (v: string | number) => void;
  onCallback?   : () => void;
  onSubmit?     : (v: string | number) => void;
};


export const TextFieldDate: React.FC<Props> = (props) => {
  const
    { sxBox, toolTitle, label, type = "datetime-local", defaultValue, changesValue, errors, errorField, disabled, fullWidth, onClick, onCallback, onBlur, onSubmit } = props,
    sx   = useStyles(useTheme() as Themes),
    Wrap = sxBox ? BoxWrap : GridWrap,
    S    = useValue(defaultValue || `` );

  React.useEffect(() => { changesValue !== undefined && S.setValue(changesValue); }, [changesValue]);
  
  const handleChange = (e: any) => {
    if (disabled) return null;
    S.setValue(e.target.value);

    onCallback && onCallback();
    if (e.keyCode === 13 || e.keyCode === 27) {
      onSubmit && onSubmit(S.value);
      onBlur && onBlur(S.value);
    }
  };

  const handleBlur = () => {
    onCallback && onCallback();
    onBlur && onBlur(S.value);
  };


  return (
    <Wrap {...props}>
      <Tooltip title={toolTitle || ""} arrow enterDelay={1000} enterNextDelay={1000}>
        <TextField
          label           = {label}
          type            = {type}
          fullWidth       = {fullWidth}
          sx              = {{ ...sx.textField, ...sxBox }}
          disabled        = {disabled}
          value           = {S.value}
          onChange        = {handleChange}
          onKeyUp         = {(event: any) => {
                              if (event.key === 'Enter') {
                                // Prevent's default 'Enter' behavior.
                                event.defaultMuiPrevented = true;
                                handleChange(event)
                              }
                            }}
          onClick         = {onClick}
          onBlur          = {handleBlur}
          InputLabelProps = {{ shrink: true }}
          error           = {errors?.[errorField] ? true : false}
          helperText      = {errors?.[errorField]}
        />
      </Tooltip>
    </Wrap>
  )
};
