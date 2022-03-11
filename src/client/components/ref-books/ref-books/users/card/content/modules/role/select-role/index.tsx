import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getRoles } from '../../../../../../../../../redux/selectors/ref-books/ref-books';
import { getErrors } from '../../../../../../../../../redux/selectors/ui';
import { State } from '../../../../../../../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// Functions
import { getRoleNameById } from '../../../../../../../utils/get-role-name-by-id/get-role-name-by-id';
import { getRoleId } from '../../../../../../../utils/get-role-id/get-role-id';
import changeGroup from '../../../../../../../../../utils/hooks/change-group';
// Types
import { UseGroup } from '../../../../../../../../../utils/hooks/types';
import { Errors, Role, User } from '../../../../../../../../../../types';
// Styles
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  textField: {
    backgroundColor: theme.cardBlock.textfield.background
  }
});


type Props = {
  roles? : Array<Role>;
  group  : UseGroup<User>;
  errors : Errors;
};


const SelectRole: React.FC<Props> = ({ roles, group, errors }) => {
  if (!roles?.length) return null;
  const sx = useStyles(useTheme());

  const handleChange = (event: SelectChangeEvent) => {
    const roleId = getRoleId(roles, event.target.value as string);
    changeGroup(group, [{ value: roleId, scheme: `role.roleId` }]);
  };
  
  return (
    <Box sx={{ minWidth: `150px` }}>
      <FormControl fullWidth error={Boolean(errors?.roleId)}>
        <InputLabel id="role-id">Тип роли</InputLabel>
        <Select
          labelId="role-id"
          value={getRoleNameById(roles, group.group.role.roleId)}
          label="Role"
          onChange={handleChange}
          // defaultValue={getRoleNameById(roles, group.obj.role.roleId)}
          sx={sx.textField}
        >
          {
            roles.map((role) => <MenuItem key={role.id} value={role.role}>
              {role.role}
              </MenuItem>)
          }
          
        </Select>
        <FormHelperText>{errors?.roleId}</FormHelperText>
      </FormControl>
    </Box>
  );
};


const mapStateToProps = (state: State) => ({
  roles: getRoles(state),
  errors: getErrors(state)
});

export default connect(mapStateToProps)(SelectRole);