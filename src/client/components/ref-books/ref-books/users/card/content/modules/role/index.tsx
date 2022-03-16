import * as React from 'react';
// MUI Stuff
import Grid from '@mui/material/Grid';
// Components
import CardBlock from '../../../../../../../containers/card-block';
import SelectRole from './select-role';
import SelectRoleType from './select-type';
// Types
import { User } from '../../../../../../../../../types';
import { UseGroup } from '../../../../../../../../utils/hooks/types';



type Props = {
  group: UseGroup<User>;
};

const RoleCnt: React.FC<Props> = ({ group }) => {
  
  return (
    <CardBlock label="Роли и полномочия">        
      <Grid item xs={12} sm={3}>
        <SelectRoleType group={group} />
      </Grid>

      <Grid item xs={12} sm={3}>
        <SelectRole group={group} />
      </Grid>
    </CardBlock>
  )
}

export default RoleCnt;
