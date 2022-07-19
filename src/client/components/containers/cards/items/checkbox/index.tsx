import * as React from 'react';
// Components
import CheckboxContainer from '../../../elements/checkbox';
// Functions
import { UseGroup } from '../../../../../utils/hooks';
// Types
import { GridStyle } from '../../../../../../types';



type Props = {
  grid?         : GridStyle;
  group         : UseGroup<any>;
  scheme?       : string;
  label?        : string;
  toolTitle?    : string;
};


export const Checkbox: React.FC<Props> = ({ group: G, grid, scheme, label, toolTitle }) => {
  
  return (
    <CheckboxContainer
      grid      = {grid}
      label     = {label}
      scheme    = {scheme}
      group     = {G}
      toolTitle = {toolTitle}
    />
  )
};
