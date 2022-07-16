import * as React from 'react';
// Components
import Personal from './modules/personal';
import Role from './modules/role';
// Functions
import { empty } from '../../../../../../../utils/objects';
// Types
import { User, CardType } from '../../../../../../../types';
import { UseGroup } from '../../../../../../utils/hooks';



type Props = {
  type  : CardType;
  group : UseGroup<User>;
};


const CardUserContent: React.FC<Props> = ({ type, group }) => {
  if (empty(group.group)) return null;
  
  return (
    <>
      <Personal group={group} type={type} />
      <Role group={group} />
    </>
  );
};

export default CardUserContent;
