import * as React from 'react';
// Components
import { TextFieldDate } from '../../../elements/textfield-date';
// Functions
import { changeGroup, setChanges, UseGroup } from '../../../../../utils/hooks';
// Types
import { Errors, GridStyle } from '../../../../../../types';
import { getValueByScheme } from '../../../../../utils/hooks';



type Props = {
  grid?        : GridStyle;
  group        : UseGroup<any>;
  fullWidth?   : boolean;
  scheme       : string;
  label        : string;
  toolTitle?   : string;
  errorField?  : string;
  errors?      : Errors;
  onSubmit?    : () => void;
};


export const TextfieldDate: React.FC<Props> = ({ group: G, grid, fullWidth, scheme, toolTitle, label, errorField, errors, onSubmit }) => {
  const
    handlerSubmit     = (value: string) => {
      changeGroup(G, [{ value, scheme }]);
      onSubmit && onSubmit();
    },
    handlerBlur       = (value: string) => changeGroup(G, [{ value, scheme }]),
    handlerSetChanges = () => setChanges(G);
    
  return (
    <TextFieldDate
      grid         = {grid}
      label        = {label}
      fullWidth    = {fullWidth}
      toolTitle    = {toolTitle}
      defaultValue = {getValueByScheme(G, scheme)}
      errorField   = {errorField}
      errors       = {errors}
      onBlur       = {handlerBlur}
      onCallback   = {handlerSetChanges}
      onSubmit     = {handlerSubmit}
    />
  );
};


TextfieldDate.defaultProps = {
  grid      : { sm: 3 },
  fullWidth : true
};
