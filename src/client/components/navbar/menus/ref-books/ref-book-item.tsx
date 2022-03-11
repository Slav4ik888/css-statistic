import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getLoadingRef } from '../../../../redux/selectors/ref-books';
import { State } from '../../../../redux/redux-types';
// MUI Stuff
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
// Icons
import RoleIcon from '@mui/icons-material/Group';
import UserIcon from '@mui/icons-material/Person';
// Components
import StatusBar from './status-bar';
// Types
import { RefBookItem } from '../../../../../types';
// Styles
import { useTheme } from '@emotion/react';



const useStyles = (theme) => ({
  root: {
    display: `flex`,
    width: 280
  },
  list_item: {
    display: `flex`,
    alignItems: `center`,
    width: 200
  }
});



type Props = {
  loadingRef? : boolean;
  item        : RefBookItem;
  onOpen      : (e: any) => void;
};


// Пункт меню Справочников для Navbar
const RefBookItem: React.FC<Props> = ({ loadingRef, item, onOpen }) => {
  const sx = useStyles(useTheme());

  if (!item.label) return <Divider />

  let icon = null;

  switch (item.iconName) {
    case 'roles': icon = <RoleIcon />; break;
    case 'users': icon = <UserIcon />;  break;
  }

  
  return (
    <MenuItem id={item.id} disabled={item?.disabled || loadingRef}>
      <Tooltip title={item.toolLabel} arrow enterDelay={1000} enterNextDelay={1000}>
        <>
          <Box sx={sx.list_item} onClick={onOpen}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </Box>

          <StatusBar id={item.id} />
        </>
      </Tooltip>
    </MenuItem>
  )
};

const mapStateToProps = (state: State) => ({
  loading: getLoadingRef(state)
});

export default connect(mapStateToProps)(RefBookItem);
