import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getLoading } from '../../../../../redux/selectors/ref-books';
import { State } from '../../../../../redux/redux-types';
// MUI Stuff
import { Box, MenuItem, Divider, ListItemText, ListItemIcon, Tooltip } from '@mui/material';
// Icons
import RoleIcon from '@mui/icons-material/Group';
import UserIcon from '@mui/icons-material/Person';
// Components
import StatusBar from '../status-bar';
// Types & Styles
import { RefbookItem } from '../../../../../../types';



const useStyles = () => ({
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
  loading? : boolean;
  item        : RefbookItem;
  onOpen      : (e: any) => void;
};


/**
 * Пункт меню Справочников для Navbar
 */
const RefbookItem: React.FC<Props> = ({ loading, item, onOpen }) => {
  const sx = useStyles();

  if (!item.label) return <Divider />

  let icon = null;

  switch (item.iconName) {
    case 'roles': icon = <RoleIcon />; break;
    case 'users': icon = <UserIcon />;  break;
  }

  
  return (
    <MenuItem id={item.id} disabled={item?.disabled || loading}>
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
  loading: getLoading(state)
});

export default connect(mapStateToProps)(RefbookItem);
