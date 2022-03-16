import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getErrors } from '../../../../../../../../../redux/selectors/ui';
import { State } from '../../../../../../../../../redux/redux-types';
// MUI Stuff
import { Box, InputLabel, MenuItem, FormControl, FormHelperText, Select, SelectChangeEvent } from '@mui/material';
// Functions
import { arrFromObj } from '../../../../../../../../../../utils/objects';
import changeGroup from '../../../../../../../../../utils/hooks/change-group';
// Types
import { UseGroup } from '../../../../../../../../../utils/hooks/types';
import { Errors, RoleType, User } from '../../../../../../../../../../types';
// Styles
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  root: {
    minWidth: `150px`
  },
  textField: {
    backgroundColor: theme.cardBlock.textfield.background
  }
});


type Props = {
  group   : UseGroup<User>;
  errors? : Errors;
}


const SelectRoleType: React.FC<Props> = ({ group, errors }) => {
  const sx = useStyles(useTheme());
  const RoleArr = arrFromObj(RoleType);

  const handleChange = (event: SelectChangeEvent) => {
    changeGroup(group, [{ value: event.target.value as RoleType, scheme: `role.type` }]);
  };
  

  return (
    <Box sx={sx.root}>
      <FormControl fullWidth error={Boolean(errors?.roleType)}>
        <InputLabel id="role-type">Тип пользователя</InputLabel>
        <Select
          labelId="role-type"
          value={group.group.role.type}
          label="Role"
          onChange={handleChange}
          sx={sx.textField}
        >
          {
            RoleArr.map((type) => <MenuItem key={type.toString()} value={type.toString()}>
              {type}
              </MenuItem>)
          }
          
        </Select>
        <FormHelperText>{errors?.roleType}</FormHelperText>
      </FormControl>
    </Box>
  );
};


const mapStateToProps = (state: State) => ({
  errors: getErrors(state)
});

export default connect(mapStateToProps)(SelectRoleType);