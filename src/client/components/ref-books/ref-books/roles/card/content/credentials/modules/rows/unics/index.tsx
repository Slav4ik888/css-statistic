import * as React from 'react';
// Components
import CredRowPermissions from '../row';
import SelectAdditional from '../../switch-additional';
// Types
import { CredSchemeItemType, UnicItem, Role } from '../../../../../../../../../../../types';
import { UseGroup } from '../../../../../../../../../../utils/hooks';



type Props = {
  type     : CredSchemeItemType;
  unicItem : UnicItem;
  group    : UseGroup<Role>;
  scheme   : string;
};


const UnicRow: React.FC<Props> = ({ type, unicItem, group, scheme }) => {

  return (
    <CredRowPermissions
      type  = {type}
      label = {unicItem.rule[2]}
      unic  = {<SelectAdditional
        group  = {group}
        scheme = {scheme}
      />}
    />
  );
};

export default UnicRow;
