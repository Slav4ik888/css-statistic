import * as React from 'react';
// Components
import Description from './description';
import Credentials from './credentials';
// Types
import { UseGroup } from '../../../../../../utils/hooks';
import { Role } from '../../../../../../../types';



type Props = {
  group : UseGroup<Role>;
};


const ContentCnt: React.FC<Props> = ({ group: G }) => (
  <>
    <Description group={G} />
    <Credentials group={G} />
  </>
);

export default ContentCnt;
