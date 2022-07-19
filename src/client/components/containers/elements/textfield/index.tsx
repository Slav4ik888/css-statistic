import * as React from 'react';
// MUI Stuff 
import { Tooltip, TextField as MuiTextField } from '@mui/material';
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
  box?          : boolean;
  sx?           : object;
  sxBox?        : object;
  toolTitle?    : string;
  label?        : string;
  type?         : "text" | "number";
  small?        : boolean;
  shrink?       : boolean;
  fullWidth?    : boolean;
  defaultValue? : string | number;
  changesValue? : string | number; // If value can be changes in any place, but not here
  disabled?     : boolean;
  isChange?     : boolean; // Нужно ли делать setIsChange(true) при handleBlur
  placeholder?  : string;
  errorField?   : string;
  errors?       : Errors;
  autoFocus?    : boolean;
  onPrepeare?   : (v: string | number) => void;
  onClick?      : () => void;
  onBlur?       : (v: string | number) => void;
  onCallback?   : () => void;
  onSubmit?     : (v: string | number) => void;
};

/**
 * 
 * @param onPrepeare - обрабатывать введённое значение ДО сохранения в onPrepeare
 */
export const TextField: React.FC<Props> = (props) => {
  const
    { box, toolTitle, label, errors, defaultValue, changesValue, type = "text", autoFocus, small, placeholder, shrink, isChange, errorField, disabled, sx: sxTextfield, fullWidth, onPrepeare, onClick, onBlur, onCallback, onSubmit } = props,
    sx       = useStyles(useTheme() as Themes),
    Wrap     = box ? BoxWrap : GridWrap,
    focusRef = React.useRef(null),
    S        = useValue(defaultValue || (type === "text" ? `` : 0)); // (() => group ? getValueByScheme(group, scheme) : placeholder)());
    
  React.useEffect(() => { autoFocus && focusRef.current.focus(); }, []);
  React.useEffect(() => { changesValue !== undefined && S.setValue(changesValue); }, [changesValue]);


  const handleChange = (e: any) => {

    if (disabled) return null;
    const value = onPrepeare ? onPrepeare(e.target.value) : e.target.value;
    S.setValue(value);

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
        <>
          <MuiTextField
            label           = {label}
            type            = {type}
            fullWidth       = {fullWidth}
            size            = {small ? "small" : "medium"}  
            sx              = {{ ...sx.textField, ...sxTextfield }}
            disabled        = {disabled}
            placeholder     = {placeholder}
            value           = {S.value} 
            inputRef        = {focusRef}
            autoFocus       = {autoFocus}
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
            InputLabelProps = {{ shrink }}
            error           = {errors?.[errorField] ? true : false}
            helperText      = {errors?.[errorField]}
          />
        </>
      </Tooltip>
    </Wrap>
  )
};
