import * as React from 'react';
// Components
import PermissionsRow from '../../../modules/rows/permissions';
import UnicsList from '../../../list-unics';
// Types
import { CredSchemeItem, CredSchemeItemType, Role } from '../../../../../../../../../../../types';
import { UseGroup } from '../../../../../../../../../../utils/hooks/types';


type Props = {
  credItem : CredSchemeItem;
  addiItem : CredSchemeItem;
  group    : UseGroup<Role>;
};


const AdditionalsRow: React.FC<Props> = ({ credItem, addiItem, group }) => {
  const scheme = `creds.` + credItem.id + `.` + addiItem.id + '.';

  return (
    <>
      <PermissionsRow // Additional
        type     = {CredSchemeItemType.FIRST}
        credItem = {addiItem}
        group    = {group}
        scheme   = {scheme}
      />
      <UnicsList
        type     = {CredSchemeItemType.SECOND}
        addiItem = {addiItem}
        scheme   = {scheme}
        group    = {group}
      />
    </>
  );
};


export default AdditionalsRow;
