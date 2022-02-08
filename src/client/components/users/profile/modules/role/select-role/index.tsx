import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getRoles } from '../../../../../../redux/selectors/data';
import { getErrors } from '../../../../../../redux/selectors/ui';
import { State } from '../../../../../../redux/redux-types';
// MUI Stuff
import { Grid, InputLabel, MenuItem, FormControl, FormHelperText, Select, SelectChangeEvent } from '@mui/material';
// Functions
import { getRoleNameById, getRoleIdByRole } from './utils';
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
  if (!roles?.length) return null;
  const sx = useStyles(useTheme());

  const handleChange = (event: SelectChangeEvent) => {
    const roleId = getRoleIdByRole(roles, event.target.value as string);
    changeGroup(G, [{ value: roleId, scheme: `role.roleId` }]);
  };
  
  return (
    <Grid item xs={12} sm={3} sx={{ minWidth: `150px` }}>
      <FormControl fullWidth error={Boolean(errors?.roleId)}>
        <InputLabel id="role-id">Тип роли</InputLabel>
        <Select
          labelId  = "role-id"
          value    = {getRoleNameById(roles, G.group.role.roleId)}
          label    = "Role"
          onChange = {handleChange}
          sx       = {sx.textField}
        >
          {
            roles.map((role) => <MenuItem
              key   = {role.id}
              value = {role.role}
            >
              {
                role.role
              }
              </MenuItem>)
          }
          
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
