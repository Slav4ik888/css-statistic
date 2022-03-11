import * as React from 'react';
// Components
import PermissionsRow from './permissions';
import AdditionalsList from './list-additionals';
import UnicsList from '../list-unics';
// Types
import { CredSchemeItem, CredSchemeItemType, Role } from '../../../../../../../../../types';
import { UseGroup } from '../../../../../../../../utils/hooks/types';


type Props = {
  credItem: CredSchemeItem;
  group: UseGroup<Role>;
};


const FirstList: React.FC<Props> = ({ credItem, group }) => {
  const scheme = `creds.` + credItem.id + `.`;

  return (
    <>
      <PermissionsRow  credItem={credItem} group={group} />
      <AdditionalsList credItem={credItem} group={group} />
      <UnicsList
        type     = {CredSchemeItemType.FIRST}
        addiItem = {credItem}
        group    = {group}
        scheme   = {scheme}
      />
    </>
  );
};


export default FirstList;
