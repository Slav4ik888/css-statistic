import * as React from 'react';
// Components
import Description from './description';
import Credentials from './credentials';
// Functions
import { empty } from '../../../../../../../utils/objects';
// Types
import { UseGroup } from '../../../../../../utils/hooks/types';
import { Role } from '../../../../../../../types';


type Props = {
  group : UseGroup<Role>;
};


const ContentCnt: React.FC<Props> = ({ group }) => {
  if (empty(group.group)) return null;

  return (
    <>
      <Description group={group} />
      <Credentials group={group} />
    </>
  );
};


export default ContentCnt;
