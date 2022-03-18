import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import CredRowPermissions from '../row';
import SelectPermission from '../../select-permission';
// Types
import { CredSchemeItem, CredSchemeItemType, PermType, Role } from '../../../../../../../../../../../types';
import { UseGroup } from '../../../../../../../../../../utils/hooks/types';


const Empty = (<Box></Box>);


type Props = {
  type     : CredSchemeItemType;
  credItem : CredSchemeItem;
  group    : UseGroup<Role>;
  scheme   : string;
};


const PermissionsRow: React.FC<Props> = ({ type, credItem, group, scheme }) => {
  if (!credItem?.permissions) return null;
  
  const Read = credItem.permissions?.read?.[0] ?
    <SelectPermission
      type   = {PermType.READ}
      value  = {credItem?.permissions?.read}
      group  = {group}
      scheme = {scheme + `r`}
    />
    : Empty;

  const Add = credItem.permissions?.add?.[0] ?
    <SelectPermission
      type   = {PermType.ADD}
      value  = {credItem?.permissions?.add}
      group  = {group}
      scheme = {scheme + `a`}
    />
    : Empty;

  const Change = credItem.permissions?.change?.[0] ?
    <SelectPermission
      type   = {PermType.CHANGE}
      value  = {credItem?.permissions?.change}
      group  = {group}
      scheme = {scheme + `c`}
    />
    : Empty;

  const Del = credItem.permissions?.del?.[0] ?
    <SelectPermission
      type   = {PermType.DEL}
      value  = {credItem?.permissions?.del}
      group  = {group}
      scheme = {scheme + `d`}
    />
    : Empty;
  

  return (
    <>
      <CredRowPermissions
        type   = {type}
        label  = {credItem.label}

        read   = {Read}
        add    = {Add}
        change = {Change}
        del    = {Del}
      />
    </>
  );
};


export default PermissionsRow;
