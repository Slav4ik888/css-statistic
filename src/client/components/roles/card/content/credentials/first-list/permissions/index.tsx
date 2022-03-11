import * as React from 'react';
// Components
import PermissionsRow from '../../modules/rows/permissions';
// Types
import { CredSchemeItem, CredSchemeItemType, Role } from '../../../../../../../../../../types';
import { UseGroup } from '../../../../../../../../../utils/hooks/types';


type Props = {
  credItem: CredSchemeItem;
  group: UseGroup<Role>;
};


const Permissions: React.FC<Props> = ({ credItem, group }) => {
  const scheme = `creds.` + credItem.id + `.`;

  return (
    <>
      <PermissionsRow
        type     = {CredSchemeItemType.SECTION}
        credItem = {credItem}
        group    = {group}
        scheme   = {scheme}
      />
    </>
  );
};


export default Permissions;
