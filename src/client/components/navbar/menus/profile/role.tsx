import * as React from 'react';
// MUI Stuff
import { Typography } from '@mui/material';
// Functions
import { getRoleNameById } from '../../../../utils/helpers';
// Types
import { Roles, User } from '../../../../../types';


type Props = {
  roles? : Roles;
  user   : User;
};

const RoleCnt: React.FC<Props> = ({ roles, user }) => {
  const role = getRoleNameById(roles, user?.role?.roleId);

  return (
    <Typography variant="body2" sx={{ color: 'secondary.dark' }} noWrap>
      {
        role
      }
    </Typography>
  )
};

export default RoleCnt;
