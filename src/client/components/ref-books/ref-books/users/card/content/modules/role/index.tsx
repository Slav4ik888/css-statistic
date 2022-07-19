import * as React from 'react';
// Components
import CardBlock from '../../../../../../../containers/cards/card-block';
import SelectRole from './select-role';
import SelectRoleType from './select-type';
// Types
import { User } from '../../../../../../../../../types';
import { UseGroup } from '../../../../../../../../utils/hooks';



type Props = {
  group: UseGroup<User>;
};


const RoleCnt: React.FC<Props> = ({ group }) => (
  <CardBlock label="Роли и полномочия">        
    <SelectRoleType group={group} />
    <SelectRole     group={group} />
  </CardBlock>
);

export default RoleCnt;
