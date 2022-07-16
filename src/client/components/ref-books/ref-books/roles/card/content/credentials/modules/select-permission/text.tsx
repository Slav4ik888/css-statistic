import * as React from 'react';
// MUI Stuff
import { Box, Tooltip } from '@mui/material';
// Functions
import { UseGroup, UseBase, getValueByScheme } from '../../../../../../../../../utils/hooks';
import getPermissionColor from './get-permission-color';
import getPermissionSize from './get-permission-size';
// Types
import { CredType, PermSchemeItem } from '../../../../../../../../../../types';



const getStyle = (color: string, fontSize: string) => ({
  cursor: `pointer`,
  color,
  fontSize,
  // borderBottom: `1px dotted ${color}`
});


type Props = {
  select : UseBase;
  group  : UseGroup<any>;
  value  : PermSchemeItem;
  scheme : string;
};


const SelectPermission: React.FC<Props> = ({ select, group, value, scheme }) => {
  const
    permission = React.useMemo(() => getValueByScheme(group, scheme) || CredType.NO, [group.group]),
    color      = React.useMemo(() => getPermissionColor(permission), [permission]),
    fontSize   = React.useMemo(() => getPermissionSize(permission), [permission]);


  const handleOpen = () => {
    // if (noCred(CredName.CAR_O_CHANGE_LOGIST, user, creds)) return showNoCred(CredName.CAR_O_CHANGE_CARRIER_TYPE);
    select.setOpen();
  };


  return (
    <Tooltip title={value[2]} arrow enterDelay={500} enterNextDelay={1000}>
      <Box sx={getStyle(color, fontSize)} onClick={handleOpen}>
        {permission}
      </Box>
    </Tooltip>
  );
};

export default SelectPermission;
