import * as React from 'react';
// Components
import Personal from './modules/personal';
import Role from './modules/role/role';
// Functions
import { empty } from '../../../../utils/objects';
// Types
import { User, UserCardType } from '../../../../types';
import { UseGroup } from '../../../utils/hooks/types';


type Props = {
  type  : UserCardType;
  group : UseGroup<User>;
};

const UserProfile: React.FC<Props> = ({ type, group: G }) => {
  if (empty(G.group)) return null;
  
  return (
    <>
      <Personal group={G} type={type} />
      <Role group={G} />
    </>
  );
};

export default UserProfile;
