import * as React from 'react';
// Components
import { TextFieldCheckNumber } from '../../../elements/textfield-check-number';
// Types & Styles
import { changeGroup, getValueByScheme, setChanges, UseGroup } from '../../../../../utils/hooks';
import { Errors, GridStyle } from '../../../../../../types';



type Props = {
  grid?         : GridStyle;
  group         : UseGroup<any>;
  fullWidth?    : boolean;
  scheme        : string;
  label         : string;
  changesValue? : number; // If value can be changes in any place, but not here
  toolTitle?    : string;
  errorField?   : string;
  errors?       : Errors;
};


export const CheckNumber: React.FC<Props> = ({ group: G, grid, fullWidth, changesValue, scheme, toolTitle, label, errorField, errors }) => {
  const
    handlerBlur       = (value: number) => changeGroup(G, [{ value, scheme }]),
    handlerSetChanges = () => setChanges(G);
  
  
  return (
    <TextFieldCheckNumber
      grid         = {grid}
      toolTitle    = {toolTitle}
      fullWidth    = {fullWidth}
      label        = {label}
      errorField   = {errorField}
      errors       = {errors}
      defaultValue = {getValueByScheme(G, scheme)}
      changesValue = {changesValue}
      onCallback   = {handlerSetChanges}
      onBlur       = {handlerBlur}
    />
  );
};


CheckNumber.defaultProps = {
  grid: { sm: 3 },
  fullWidth: true
};
