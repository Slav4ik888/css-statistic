import * as React from 'react';
// MUI Stuff
import { MenuItem, FormControl, Select, SelectChangeEvent } from '@mui/material';
// Functions
import { UseGroup, UseBase, changeGroup, getValueByScheme } from '../../../../../../../../../utils/hooks';
// Types
import { CredType } from '../../../../../../../../../../types';



type Props = {
  select : UseBase;
  group  : UseGroup<any>;
  scheme : string;
};


const SelectPermission: React.FC<Props> = ({ select, group, scheme }) => {
  const
    CredTypeArr = Object.values(CredType);

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;

    changeGroup(group, [{ value, scheme }]);
    handleClose();
  };
  
  const handleClose = () => select.setClose();


  return (
    <FormControl fullWidth>
      <Select
        value    = {getValueByScheme(group, scheme) || CredType.NO}
        onChange = {handleChange}
        open     = {select.open}
        onClose  = {handleClose}
        sx       = {{ height: 32, m: 1, fontSize: `0.8rem` }}
      >
        {
          CredTypeArr.map((item) => <MenuItem key={item.toString()} value={item.toString()}>
            {item}
          </MenuItem>)
        }
        
      </Select>
    </FormControl>
  );
};

export default SelectPermission;
