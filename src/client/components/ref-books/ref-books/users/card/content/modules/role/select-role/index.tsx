import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getRoles } from '../../../../../../../../../redux/selectors/ref-books';
import { getErrors } from '../../../../../../../../../redux/selectors/ui';
import { State } from '../../../../../../../../../redux/redux-types';
// MUI Stuff
import { Grid, InputLabel, MenuItem, FormControl, FormHelperText, Select, SelectChangeEvent } from '@mui/material';
// Functions
import { getRoleNameById } from '../../../../../../../utils/get-role-name-by-id';
import { getRoleId } from '../../../../../../../utils/get-role-id';
import { UseGroup, changeGroup } from '../../../../../../../../../utils/hooks';
// Types & Styles
import { Errors, Roles, User } from '../../../../../../../../../../types';
import { useTheme } from '@emotion/react';
import { Themes } from '../../../../../../../../../utils/styles';



const useStyles = (theme: Themes) => ({
  textField: {
    backgroundColor: theme.cardBlock.textfield.background
  }
});


type Props = {
  roles? : Roles;
  group  : UseGroup<User>;
  errors : Errors;
};


const SelectRole: React.FC<Props> = ({ roles, group, errors }) => {
  const sx = useStyles(useTheme() as Themes);

  const handleChange = (event: SelectChangeEvent) => {
    const roleId = getRoleId(roles, event.target.value as string);
    changeGroup(group, [{ value: roleId, scheme: `role.roleId` }]);
  };
  
  if (!roles?.length) return null;

  return (
    <Grid item xs={12} sm={3}>
      <FormControl fullWidth error={Boolean(errors?.roleId)}>
        <InputLabel id='role-id'>Тип роли</InputLabel>
        <Select
          labelId  = 'role-id'
          value    = {getRoleNameById(roles, group.group.role.roleId)}
          label    = 'Role'
          onChange = {handleChange}
          sx       = {sx.textField}
        >
          {
            roles.map((role) => <MenuItem key={role.id} value={role.role}>
              {role.role}
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
