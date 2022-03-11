import * as React from 'react';
// Components
import AdditionalsRow from './additionals-row';
// Types
import { CredSchemeItem, Role } from '../../../../../../../../../../types';
import { UseGroup } from '../../../../../../../../../utils/hooks/types';



type Props = {
  credItem : CredSchemeItem;
  group    : UseGroup<Role>;
};


const AdditionalsList: React.FC<Props> = ({ credItem, group }) => {
  if (!credItem?.additionals?.length) return null;


  return (
    <>
      {
        credItem.additionals.map(item => <AdditionalsRow
          key      = {item.id}
          credItem = {credItem}
          addiItem = {item}
          group    = {group}
        />)
      }
    </>
  );
};


export default AdditionalsList;
