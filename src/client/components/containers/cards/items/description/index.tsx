import * as React from 'react';
// Components
import { TextArea } from '../../../elements/textarea';
// Functions
import { UseGroup, setChanges, changeGroup, getValueByScheme } from '../../../../../utils/hooks';
// Types
import { Errors, GridStyle } from '../../../../../../types';



type Props = {
  grid?         : GridStyle;
  group         : UseGroup<any>;
  scheme?       : string;
  label?        : string;
  changesValue? : string; // If value can be changes in any place, but not here
  placeholder?  : string;
  errorField?   : string;
  errors?       : Errors;
};


export const Description: React.FC<Props> = ({ group: G, grid, scheme, label, changesValue, placeholder, errorField, errors }) => {
  const
    handlerBlur       = (value: string) => changeGroup(G, [{ value, scheme }]),
    handlerSetChanges = () => setChanges(G);
  
  
  return (
    <TextArea
      grid         = {grid}
      label        = {label}
      placeholder  = {placeholder}
      errorField   = {errorField}
      errors       = {errors}
      defaultValue = {getValueByScheme(G, scheme)}
      changesValue = {changesValue}
      onCallback   = {handlerSetChanges}
      onBlur       = {handlerBlur}
    />
  )
};


Description.defaultProps = {
  grid        : { sm: 12 },
  scheme      : 'description',
  label       : 'Примечание',
  placeholder : 'Примечание',
  errorField  : 'description',
};
