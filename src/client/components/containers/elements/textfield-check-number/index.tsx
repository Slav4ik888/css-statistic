import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getErrors } from '../../../../redux/selectors/ui';
import { State } from '../../../../redux/redux-types';
// MUI Stuff 
import { Tooltip, TextField } from '@mui/material';
// Components
import GridWrap from '../../grid-wrap';
import BoxWrap from '../../box-wrap';
// Functions
import toNumber from '../../../../../utils/numbers/to-number';
import { UseGroup, changeGroup, getValueByScheme } from '../../../../utils/hooks';
import getStrNumber from '../../../../../utils/numbers/get-str-number';
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
  group?        : UseGroup<any>;

  // Tooltip
  toolTitle?    : string;

  // TextField
  label         : string;
  fullWidth?    : boolean;
  small?        : boolean;
  shrink?       : boolean;
  defaultValue? : string | number;
  disabled?     : boolean;
  errorField?   : string;
  sxField?      : object;

  // Control
  scheme        : string;
  errors?       : Errors;
  onBlur?       : () => void;
  onClick?      : () => void;
};


const TextFieldCheckNumber: React.FC<Props> = (props) => {
  const
    { box, toolTitle, label, small, shrink, defaultValue, errors, errorField, sxField, scheme, disabled, fullWidth, group: G, onBlur, onClick } = props,
    sx = useStyles(useTheme() as Themes),
    Wrap = box ? BoxWrap : GridWrap;

  
  const handleChange = (e: any) => {
    if (disabled) return null;
    let value = toNumber(e.target.value);
    changeGroup(G, [{ value, scheme }]);
  };


  const handleBlur = (e: any) => {
    let value = toNumber(e.target.value);
    changeGroup(G, [{ value, scheme }]);
    if (onBlur) onBlur();
  };


  return (
    <Wrap {...props}>
      <Tooltip title={toolTitle || ""} arrow enterDelay={1000} enterNextDelay={1000}>
        <TextField
          label           = {label}
          // type            = "text"
          fullWidth       = {fullWidth}
          size            = {small ? "small" : "medium"}  
          sx              = {{ ...sx.textField, ...sxField }}
          disabled        = {disabled}
          value           = {getStrNumber(defaultValue || getValueByScheme(G, scheme))}
          onChange        = {handleChange}
          onClick         = {onClick}
          onBlur          = {handleBlur}
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

export default connect(mapStateToProps)(TextFieldCheckNumber);
