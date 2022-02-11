import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getRoles } from '../../../../../../redux/selectors/data';
import { getErrors } from '../../../../../../redux/selectors/ui';
import { State } from '../../../../../../redux/redux-types';
// MUI Stuff
import { Grid, InputLabel, FormControl, FormHelperText, Select, SelectChangeEvent } from '@mui/material';
// Components
import RoleMenuItem from './menu-item';
import AddRoleBtn from './add-role-btn';
// Functions
import { getRoleNameById, getRoleIdByRole } from '../../../../../../utils/helpers';
import changeGroup from '../../../../../../utils/hooks/change-group';
// Types & Styles
import { UseGroup } from '../../../../../../utils/hooks/types';
import { Errors, Roles, User } from '../../../../../../../types';
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  textField: {
    backgroundColor: theme.profile.textfield.background
  }
});


type Props = {
  roles? : Roles;
  group  : UseGroup<User>;
  errors : Errors;
};


const SelectRole: React.FC<Props> = ({ roles, group: G, errors }) => {
  console.log('roles: ', roles);
  const sx = useStyles(useTheme());

  const handleChange = (e: SelectChangeEvent) => {
    const roleId = getRoleIdByRole(roles, e.target.value as string);
    changeGroup(G, [{ value: roleId, scheme: `role.roleId` }]);
  };
  
  return (
    <Grid item xs={12} sm={7}>
      <FormControl fullWidth error={Boolean(errors?.roleId)}>
        <InputLabel id="role-id">Тип роли</InputLabel>
        <Select
          label    = "Role"
          labelId  = "role-id"
          value    = {getRoleNameById(roles, G.group.role.roleId)}
          onChange = {handleChange}
          sx       = {sx.textField}
        >
          {
            roles?.map((role) => <RoleMenuItem
              key      = {role.id}
              role     = {role}
              onSelect = {handleChange}
            />)
          }
          <AddRoleBtn />
        </Select>
        <FormHelperText>{errors?.roleId}</FormHelperText>
      </FormControl>
    </Grid>
  );
};


const mapStateToProps = (state: State) => ({
  roles  : getRoles(state),
  errors : getErrors(state)
});

export default connect(mapStateToProps)(SelectRole);
