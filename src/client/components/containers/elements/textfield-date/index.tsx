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
  // box?          : boolean;
  sxBox?        : object;
  group?        : UseGroup<any>;
  // Tooltip
  toolTitle?    : string;
  // TextField
  label         : string;
  type?         : "datetime-local" | "date";
  fullWidth?    : boolean;
  defaultValue? : string | number;
  disabled?     : boolean;
  errorField?   : string;
  // Control
  scheme        : string;
  errors?       : Errors;
  onClick?      : () => void;
  onCallback?   : () => void;
};


const TextFieldDate: React.FC<Props> = (props) => {
  const { sxBox, toolTitle, label, type = "datetime-local", defaultValue, errors, errorField, scheme, disabled, fullWidth, group: G, onClick, onCallback } = props;
  const sx = useStyles(useTheme());

  const Wrap = sxBox ? BoxWrap : GridWrap;

  const handleChange = (e: any) => {
    if (disabled) return null;
    changeGroup(G, [{ value: e.target.value, scheme }]);
    if (onCallback) onCallback();
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
          value           = {defaultValue || getValueByScheme(G, scheme)}
          onChange        = {handleChange}
          onClick         = {onClick}
          InputLabelProps = {{ shrink: true }}
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

export default connect(mapStateToProps)(TextFieldDate);