import * as React from 'react';
// Components
import UnicRow from './row';
// Types
import { CredSchemeItem, CredSchemeItemType, Role } from '../../../../../../../../../types';
import { UseGroup } from '../../../../../../../../utils/hooks/types';


type Props = {
  type     : CredSchemeItemType;
  addiItem : CredSchemeItem;
  group    : UseGroup<Role>;
  scheme   : string;
};


const UnicsList: React.FC<Props> = ({ type, addiItem, group, scheme }) => {
  if (!addiItem?.unics?.length) return null;


  return (
    <>
      {
        addiItem.unics.map(unicItem => <UnicRow
          key      = {unicItem.id}
          type     = {type}
          unicItem = {unicItem}
          scheme   = {scheme}
          group    = {group}
        />)
      }
    </>
  );
};


export default UnicsList;
