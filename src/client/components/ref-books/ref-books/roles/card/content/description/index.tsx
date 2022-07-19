import * as React from 'react';
// Components
import CardBlock from '../../../../../../containers/cards/card-block';
import RoleLabel from './role-label';
import { Description } from '../../../../../../containers/cards/items';
// Types
import { UseGroup } from '../../../../../../../utils/hooks';
import { Role } from '../../../../../../../../types';



type Props = {
  group    : UseGroup<Role>;
};


const CardDescription: React.FC<Props> = ({ group: R }) => {

  return (
    <CardBlock label='Описание роли'>
      <RoleLabel group={R} />
      <Description group={R} />
    </CardBlock>
  );
};

export default CardDescription;
