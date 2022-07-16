import * as React from 'react';
// MUI Stuff
import Switch from '@mui/material/Switch';
// Functions
import { UseGroup, changeGroup, getValueByScheme } from '../../../../../../../../../utils/hooks';
// Types
import { Role } from '../../../../../../../../../../types';



type Props = {
  group  : UseGroup<Role>;
  scheme : string;
};


const SwitchAdditional: React.FC<Props> = ({ group, scheme }) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    changeGroup(group, [{ value: e.target.checked, scheme }]);
  
  
  return (
    <Switch
      checked    = {getValueByScheme(group, scheme) || false}
      onChange   = {handleChange}
      inputProps = {{ 'aria-label': 'controlled' }}
      size       = "small"
    />
  );
};

export default SwitchAdditional;
