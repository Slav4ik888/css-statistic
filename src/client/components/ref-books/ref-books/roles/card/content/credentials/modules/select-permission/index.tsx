import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import Select from './select';
import Text from './text';
// Functions
import { useValue, UseGroup } from '../../../../../../../../../utils/hooks';
// Types
import { PermSchemeItem, PermType } from '../../../../../../../../../../types';



type Props = {
  type   : PermType;
  group  : UseGroup<any>;
  value  : PermSchemeItem;
  scheme : string;
};


const SelectPermission: React.FC<Props> = ({ type, group, value, scheme }) => {
  const
    select = useValue();
  
  if (!value[0]) return <Box>`-`</Box>;

  return (
    <>
      {
        select.open
          ? <Select
              select = {select}
              group  = {group}
              scheme = {scheme}
            />
          : <Text
              select = {select}
              value  = {value}
              group  = {group}
              scheme = {scheme}
            />
      }
    </>
  );
};


export default SelectPermission;