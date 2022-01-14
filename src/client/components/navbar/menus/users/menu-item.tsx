import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { State } from '../../../../redux/redux-types';
// MUI Stuff
import { Tooltip, MenuItem, Box, ListItemText, ListItemIcon, Divider } from '@mui/material';
// Icons
import UserIcon from '@mui/icons-material/AccountBox';
// Components
// Functions
import { getFio } from './utils/get-fio';
// Types, Styles
import { useTheme } from '@emotion/react';
import { fc_ } from '../../../../utils/styles';
import { User } from '../../../../../types';



const useStyles = (theme) => ({
  root: {
    display: `flex`,
    width: 280
  },
  list_user: {
    ...fc_,
    width: 200
  },
  div: {
    my: 0.5
  }
});



type Props = {
  loadingRef? : boolean;
  user        : User;
  onOpen      : (e: any) => void;
};


// Пункт меню Справочников для Navbar
const RefBookItem: React.FC<Props> = ({ user, onOpen }) => {
  const sx = useStyles(useTheme());

  
  return (
    <MenuItem id={user.id}>
      <Tooltip title="Редактировать пользователя" arrow enterDelay={1000} enterNextDelay={1000}>
        <Box sx={sx.list_user} onClick={onOpen}>
          <ListItemIcon><UserIcon /></ListItemIcon>
          <ListItemText primary={getFio(user?.person, true)} />
        </Box>
      </Tooltip>
      <Divider sx={sx.div} />
    </MenuItem>
  )
};

const mapStateToProps = (state: State) => ({
});

export default connect(mapStateToProps)(RefBookItem);
