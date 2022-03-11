import * as React from 'react';
// MUI Stuff
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// Functions
import { arrFromObj } from '../../../../../../../../../../utils/objects/objects';
import changeGroup from '../../../../../../../../../utils/hooks/change-group';
import getValueByScheme from '../../../../../../../../../utils/hooks/get-value-by-scheme';
// Types
import { UseGroup, UseOpen } from '../../../../../../../../../utils/hooks/types';
import { CredType, PermType } from '../../../../../../../../../../types';


type Props = {
  select : UseOpen;
  type   : PermType;
  group  : UseGroup<any>;
  scheme : string;
};


const SelectPermission: React.FC<Props> = ({ select, type, group, scheme }) => {
  if (!select.open) return null;
  const CredTypeArr = arrFromObj(CredType);

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