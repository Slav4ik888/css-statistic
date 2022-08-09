import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { State } from '../../../../../../../../../redux/redux-types';
// MUI Stuff
import { Tooltip, Box, ListItemText, ListItemIcon, ListItemAvatar, Avatar } from '@mui/material';
// Icons
import RoleIcon from '@mui/icons-material/AdminPanelSettings';
import EditIcon from '@mui/icons-material/Edit';
// Components
import MenuItem from '../../../../../../../../navbar/menus/menu-item';
// Functions
// Types, Styles
import { fc_, fc_sb } from '../../../../../../../../../utils/styles';
import { Role } from '../../../../../../../../../../types';
import { useGroup } from '../../../../../../../../../utils/hooks';


const useStyles = () => ({
  role: {
    ...fc_sb,
    width: `100%`
  },
  roleBtn: {
    ...fc_,
    width: `100%`
  }
});



type Props = {
  role     : Role;
  onSelect : (e: any) => void;
};


const RoleMenuItem: React.FC<Props> = ({ role, onSelect }) => {
  console.log('role: ', role);
  const
    sx = useStyles(),
    G  = useGroup(false, role);

  const handleEdit = () => {
    console.log(`handleEdit`);
    G.setOpen();
  };
  
  return (
    <MenuItem id={role.id} divider>
      <Box sx={sx.role}>
        <Box sx={sx.roleBtn} onClick={onSelect}>
          <ListItemIcon>
            <RoleIcon />
          </ListItemIcon>

          <ListItemText primary={role.role} />
        </Box>
        
        <Tooltip title={'Редактировать роль'} arrow enterDelay={1000} enterNextDelay={1000}>
          <ListItemAvatar onClick={handleEdit}>
            <Avatar>
              <EditIcon />
            </Avatar>
          </ListItemAvatar>
        </Tooltip>
      </Box>
    </MenuItem>
  )
};

const mapStateToProps = (state: State) => ({
});

export default connect(mapStateToProps)(RoleMenuItem);
