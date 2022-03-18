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


const ContentCnt: React.FC<Props> = ({ group: G }) => {
  if (empty(G.group)) return null;

  return (
    <>
      <Description group={G} />
      <Credentials group={G} />
    </>
  );
};


export default ContentCnt;
