import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getErrors } from '../../../../redux/selectors/ui';
import { State } from '../../../../redux/redux-types';
// MUI Stuff 
import { Tooltip, TextField as MuiTextField } from '@mui/material';
// Components
import GridWrap from '../../grid-wrap';
import BoxWrap from '../../box-wrap';
// Functions
import changeGroup from '../../../../utils/hooks/change-group';
import getValueByScheme from '../../../../utils/hooks/get-value-by-scheme';
// Types
import { Errors, GridStyle } from '../../../../../types';
import { UseGroup } from '../../../../utils/hooks/types';
// Styles
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  textField: {
    backgroundColor: theme.cardBlock.textfield.background
  }
});



type Props = {
  grid?         : GridStyle;
  box?          : boolean;
  sx?           : object;
  
  // Tooltip
  toolTitle?    : string;

  // TextField
  label         : string;
  type?         : "text" | "number";
  small?        : boolean;
  shrink?       : boolean;
  fullWidth?    : boolean;
  defaultValue? : string | number;
  disabled?     : boolean;
  placeholder?  : string;
  errorField?   : string;

  // Control
  group?        : UseGroup<any>;
  scheme?       : string;
  errors?       : Errors;

  onPrepeare?   : (v: string) => void;
  onClick?      : () => void;
  onBlur?       : () => void;
  onCallback?   : () => void;
};


const TextField: React.FC<Props> = (props) => {
  const { box, toolTitle, label, type = "text", small, placeholder, shrink, defaultValue, errors, errorField, scheme, disabled, sx: sxTextfield,  fullWidth, group, onPrepeare, onClick, onBlur, onCallback } = props;
  const sx = useStyles(useTheme());

  const Wrap = box ? BoxWrap : GridWrap;

  const handleChange = (e: any) => {
    if (disabled) return null;
    const value = onPrepeare ? onPrepeare(e.target.value) : e.target.value;

    changeGroup(group, [{ value, scheme }]);
    if (onCallback) onCallback();
  };
  

  return (
    <Wrap {...props}>
      <Tooltip title={toolTitle || ""} arrow enterDelay={1000} enterNextDelay={1000}>
        <MuiTextField
          label           = {label}
          type            = {type}
          fullWidth       = {fullWidth}
          size            = {small ? "small" : "medium"}  
          sx              = {{ ...sx.textField, ...sxTextfield }}
          disabled        = {disabled}
          placeholder     = {placeholder}
          value           = {defaultValue || getValueByScheme(group, scheme)}
          onChange        = {handleChange}
          onClick         = {onClick}
          onBlur          = {onBlur}
          InputLabelProps = {{ shrink }}
          error           = {errors?.[errorField] ? true : false}
          helperText      = {errors?.[errorField]}
        />
      </Tooltip>
    </Wrap>
  )
};

const mapStateToProps = (state: State) => ({
  errors: getErrors(state)
});

export default connect(mapStateToProps)(TextField);