import * as React from 'react';
// Components
import UnicRow from '../../modules/rows/unics';
// Types
import { CredSchemeItemType, UnicItem, Role } from '../../../../../../../../../../types';
import { UseGroup } from '../../../../../../../../../utils/hooks';


type Props = {
  type      : CredSchemeItemType;
  unicItem  : UnicItem;
  group     : UseGroup<Role>;
  scheme    : string;
};


const Unic: React.FC<Props> = ({ type, unicItem, group, scheme }) => {
  const
    _scheme = scheme + unicItem.id;

  return (
    <UnicRow
      type     = {type}
      unicItem = {unicItem}
      group    = {group}
      scheme   = {_scheme}
    />
  );
};

export default Unic;
