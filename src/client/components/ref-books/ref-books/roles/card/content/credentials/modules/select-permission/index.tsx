import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import Select from './select';
import Text from './text';
// Functions
import { useOpen } from '../../../../../../../../../utils/hooks';
// Types
import { UseGroup } from '../../../../../../../../../utils/hooks/types';
import { PermSchemeItem, PermType } from '../../../../../../../../../../types';



type Props = {
  type   : PermType;
  group  : UseGroup<any>;
  value  : PermSchemeItem;
  scheme : string;
};


const SelectPermission: React.FC<Props> = ({ type, group, value, scheme }) => {
  if (!value[0]) return <Box>`-`</Box>;
  
  const select = useOpen();

  return (
    <>
      <Text
        select = {select}
        value  = {value}
        group  = {group}
        scheme = {scheme}
      />

      <Select
        select = {select}
        type   = {type}
        group  = {group}
        scheme = {scheme}
      />
    </>
  );
};


export default SelectPermission;