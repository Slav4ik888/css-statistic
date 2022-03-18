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


const FirstList: React.FC<Props> = ({ credItem, group: G }) => {
  const scheme = `creds.` + credItem.id + `.`;

  return (
    <>
      <PermissionsRow  credItem={credItem} group={G} />
      <AdditionalsList credItem={credItem} group={G} />
      <UnicsList
        type     = {CredSchemeItemType.FIRST}
        addiItem = {credItem}
        group    = {G}
        scheme   = {scheme}
      />
    </>
  );
};


export default FirstList;
