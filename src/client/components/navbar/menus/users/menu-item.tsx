import * as React from 'react';
// MUI Stuff
import { Box, ListItemText, ListItemIcon } from '@mui/material';
// Icons
import UserIcon from '@mui/icons-material/AccountBox';
// Components
import MenuItem from '../menu-item';
// Functions
import { getFio } from '../../../../utils/helpers';
// Types, Styles
import { fc_ } from '../../../../utils/styles';
import { User } from '../../../../../types';




const useStyles = () => ({
  list_user: {
    ...fc_,
    width: 200
  }
});



type Props = {
  user   : User;
  onOpen : (e: any) => void;
};


const UserMenuItem: React.FC<Props> = ({ user, onOpen }) => {
  const sx = useStyles();

  
  return (
    <MenuItem
      id        = {user.id}
      toolTitle = "Редактировать пользователя"
      divider
    >
      <Box sx={sx.list_user} onClick={onOpen}>
        <ListItemIcon><UserIcon /></ListItemIcon>
        <ListItemText primary={getFio(user?.person, true)} />
      </Box>
    </MenuItem>
  )
};

export default UserMenuItem;
