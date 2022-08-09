import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getRoles } from '../../../../../../../../../redux/selectors/ref-books';
import { getErrors } from '../../../../../../../../../redux/selectors/ui';
import { State } from '../../../../../../../../../redux/redux-types';
// MUI Stuff
import { Grid, MenuItem, InputLabel, FormControl, FormHelperText, Select, Tooltip, Box, ListItemIcon, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
// Icons
import RoleIcon from '@mui/icons-material/AdminPanelSettings';
import EditIcon from '@mui/icons-material/Edit';
// Components
import AddRoleBtn from '../add-role-btn';
import DialogInfo from '../../../../../../../../dialogs/dialog-info';
import RoleCnt from '../role-cnt';
// Functions
import { UseGroup, UseValue, changeGroup } from '../../../../../../../../../utils/hooks';
import { sortingArr } from '../../../../../../../../../../utils/sorting/sorting-arr';
import { useGroup } from '../../../../../../../../../utils/hooks';
// Types & Styles
import { CardType, Errors, Role, Roles, User } from '../../../../../../../../../../types';
import { useTheme } from '@emotion/react';
import { fc_, fc_sb, Themes } from '../../../../../../../../../utils/styles';



const useStyles = (theme: Themes) => ({
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
  select : UseValue<any>;
  group  : UseGroup<User>;
  errors : Errors;
};


const SelectRole: React.FC<Props> = ({ roles, select, group: U, errors }) => {
  const
    sx = useStyles(useTheme() as Themes),
    G  = useGroup<Role>(),
    sortedRoles = React.useMemo(() => sortingArr(roles, `role`), [roles]);
    
  console.log('U: ', U.group);
  console.log('G: ', G.group);

  
  const handleEdit = (e: any) => {
    e.stopPropagation();
    console.log('e.target: ', e.target);

    // G.setGroup(getItemFromArrByField(roles, `id`, roleId));
    G.setOpen();
  };


  const handleChange = (e: any) => {
    const roleId = e.target.value;
    console.log('CHANGE roleId: ', roleId);
    
    if (roleId) changeGroup(U, [{ value: roleId, scheme: `role.roleId` }]);
    select.setClose();
  };

  if (!select.open) return null;

  return (
    <>
      <Grid item xs={12} sm={7}>
        <FormControl fullWidth error={Boolean(errors?.roleId)}>
          <InputLabel id="label-role-id">Тип роли</InputLabel>
          <Select
            label    = "Role"
            labelId  = "label-role-id"
            open     = {select.open}
            onClose  = {() => select.setClose()}
            onOpen   = {() => select.setOpen()}
            onChange = {handleChange}
            sx       = {sx.textField}
          >
            {
              sortedRoles?.map((role) => 
                <MenuItem
                  key   = {role.id}
                  value = {role.id}
                >
                  <Tooltip title='Выбрать роль' arrow enterDelay={1000} enterNextDelay={1000}>
                    <Box sx={sx.role}>
                      <Box sx={sx.roleBtn}>
                        <ListItemIcon>
                          <RoleIcon />
                        </ListItemIcon>

                        <ListItemText primary={role.role} />
                      </Box>
                      
                      <Tooltip title={'Редактировать роль'} arrow enterDelay={1000} enterNextDelay={1000}>
                        <ListItemAvatar className='edit-button' id={role.id} onClick={handleEdit}>
                          <Avatar>
                            <EditIcon />
                          </Avatar>
                        </ListItemAvatar>
                      </Tooltip>
                    </Box>
                  </Tooltip>
                </MenuItem>
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
