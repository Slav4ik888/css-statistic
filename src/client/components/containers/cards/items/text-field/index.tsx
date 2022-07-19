import * as React from 'react';
// Components
import { TextField } from '../../../elements/textfield';
// Functions
import { changeGroup, setChanges, UseGroup } from '../../../../../utils/hooks';
// Types
import { Errors, GridStyle } from '../../../../../../types';
import { getValueByScheme } from '../../../../../utils/hooks';



type Props = {
  grid?         : GridStyle;
  group         : UseGroup<any>;
  disabled?     : boolean;
  placeholder?  : string;
  autoFocus?    : boolean;
  fullWidth?    : boolean;
  scheme        : string;
  label         : string;
  changesValue? : string; // If value can be changes in any place, but not here
  toolTitle?    : string;
  errorField?   : string;
  errors?       : Errors;
  onSubmit?     : () => void;
};


export const TextfieldItem: React.FC<Props> = ({ group: G, grid, disabled, placeholder, changesValue, autoFocus, fullWidth, scheme, toolTitle, label, errorField, errors, onSubmit }) => {
  const
    handlerSubmit     = (value: string) => {
      changeGroup(G, [{ value, scheme }]);
      onSubmit && onSubmit();
    },
    handlerBlur       = (value: string) => changeGroup(G, [{ value, scheme }]),
    handlerSetChanges = () => setChanges(G);
    
  
  return (
    <TextField
      grid         = {grid}
      label        = {label}
      autoFocus    = {autoFocus}
      fullWidth    = {fullWidth}
      toolTitle    = {toolTitle}
      disabled     = {disabled}
      placeholder  = {placeholder}
      defaultValue = {getValueByScheme(G, scheme)}
      changesValue = {changesValue}
      errorField   = {errorField}
      errors       = {errors}
      onBlur       = {handlerBlur}
      onCallback   = {handlerSetChanges}
      onSubmit     = {handlerSubmit}
    />
  );
};


TextfieldItem.defaultProps = {
  grid: { sm: 3 },
  fullWidth: true
};
