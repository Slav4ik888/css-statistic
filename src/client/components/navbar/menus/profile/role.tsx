import * as React from 'react';
// MUI Stuff
import { Typography } from '@mui/material';
// Functions
import getRoleById from './utils/get-role-by-id';
// Types
import { User } from '../../../../../types';


type Props = {
  user  : User;
};

const RoleCnt: React.FC<Props> = ({ user }) => {
  const role = getRoleById(user);
  if (!role) return null;

  return (
    <Typography variant="body2" sx={{ color: 'secondary.dark' }} noWrap>
      {
        role?.label
      }
    </Typography>
  )
};

export default RoleCnt;