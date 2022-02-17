import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getRoles } from '../../../../../../redux/selectors/data';
import { getErrors } from '../../../../../../redux/selectors/ui';
import { State } from '../../../../../../redux/redux-types';
// MUI Stuff
import { Grid, MenuItem, InputLabel, FormControl, FormHelperText, Select, SelectChangeEvent, Tooltip, Box, ListItemIcon, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
// Icons
import RoleIcon from '@mui/icons-material/AdminPanelSettings';
import EditIcon from '@mui/icons-material/Edit';
// Components
import RoleMenuItem from './menu-item';
import AddRoleBtn from './add-role-btn';
import DialogInfo from '../../../../../dialogs/dialog-info';
import RoleCnt from './role-cnt';
// Functions
import { getRoleNameById, getRoleIdByRole } from '../../../../../../utils/helpers';
import changeGroup from '../../../../../../utils/hooks/change-group';
import { sortingArr } from '../../../../../../../utils/sorting/sorting-arr';
import { useGroup } from '../../../../../../utils/hooks';
// Types & Styles
import { UseGroup } from '../../../../../../utils/hooks/types';
import { CardType, Errors, Role, Roles, User } from '../../../../../../../types';
import { useTheme } from '@emotion/react';
import { fc_, fc_sb } from '../../../../../../utils/styles';



const useStyles = (theme) => ({
  textField: {
    backgroundColor: theme.profile.textfield.background
  },
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
  roles? : Roles;
  group  : UseGroup<User>;
  errors : Errors;
};


const SelectRole: React.FC<Props> = ({ roles, group: U, errors }) => {
  console.log('U: ', U.group);
  const
    sx = useStyles(useTheme()),
    G  = useGroup<Role>();

  // TODO: G.setGroup
  const handleEdit = () => {
    console.log(`handleEdit`);
    G.setOpen();
  };
  const sortedRoles = React.useMemo(() => sortingArr(roles, `role`), [roles]);
  console.log('sortedRoles: ', sortedRoles);

  const handleChange = (e: SelectChangeEvent) => {
    const roleId = getRoleIdByRole(roles, e.target.value as string);
    console.log('roleId: ', roleId);
    console.log('e.target.value: ', e.target.value);
    if (roleId) changeGroup(U, [{ value: roleId, scheme: `role.roleId` }]);
  };


  return (
    <>
      <Grid item xs={12} sm={7}>
        <FormControl fullWidth error={Boolean(errors?.roleId)}>
          <InputLabel id="label-role-id">Тип роли</InputLabel>
          <Select
            label    = "Role"
            labelId  = "label-role-id"
            value    = {getRoleNameById(roles, U.group.role.roleId)}
            onChange = {handleChange}
            sx       = {sx.textField}
          >
            {
              sortedRoles?.map((role) => 
                <MenuItem key={role.id}>
                  <Tooltip title='Выбрать роль' arrow enterDelay={1000} enterNextDelay={1000}>
                    <Box sx={sx.role}>
                      <Box sx={sx.roleBtn} onClick={() => {}}>
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
                  </Tooltip>
                </MenuItem>
                // <RoleMenuItem
                //   key      = {role.id}
                //   role     = {role}
                //   onSelect = {handleChange}
                // />
              )
            }
            <AddRoleBtn />
          </Select>
          <FormHelperText>{errors?.roleId}</FormHelperText>
        </FormControl>
      </Grid>

      <DialogInfo hookOpen={G} title="Редактирование роли" maxWidth="sm">
        <RoleCnt type={CardType.EDIT} group={G} />
      </DialogInfo>
    </>
  );
};


const mapStateToProps = (state: State) => ({
  roles  : getRoles(state),
  errors : getErrors(state)
});

export default connect(mapStateToProps)(SelectRole);
