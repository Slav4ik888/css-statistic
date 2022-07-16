import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getErrors } from '../../../../../../redux/selectors/ui';
import { State } from '../../../../../../redux/redux-types';
// MUI Stuff
import { Grid, InputLabel, MenuItem, FormControl, FormHelperText, Select, SelectChangeEvent } from '@mui/material';
// Functions
import { UseGroup, changeGroup } from '../../../../../../utils/hooks';
// Types && Styles
import { Errors, RoleType, User } from '../../../../../../../types';
import { useTheme } from '@emotion/react';
import { Themes } from '../../../../../../utils/styles';



const useStyles = (theme: Themes) => ({
  root: {
    minWidth: `150px`
  },
  textField: {
    backgroundColor: theme.profile.textfield.background
  }
});


type Props = {
  group   : UseGroup<User>;
  errors? : Errors;
};


const SelectRoleType: React.FC<Props> = ({ group: G, errors }) => {
  const
    sx      = useStyles(useTheme() as Themes),
    RoleArr = Object.values(RoleType);

  
  const handleChange = (event: SelectChangeEvent) => {
    changeGroup(G, [{ value: event.target.value as RoleType, scheme: `role.type` }]);
  };
  

  return (
    <Grid item xs={12} sm={5} sx={sx.root}>
      <FormControl fullWidth error={Boolean(errors?.roleType)}>
        <InputLabel id="label-role-type">Тип пользователя</InputLabel>
        <Select
          label    = "RoleType"
          labelId  = "label-role-type"
          value    = {G.group.role.type}
          onChange = {handleChange}
          sx       = {sx.textField}
        >
          {
            RoleArr.map((type) => <MenuItem
              key   = {type.toString()}
              value = {type.toString()}
            >
              {
                type
              }
              </MenuItem>)
          }
        </Select>
        <FormHelperText>{errors?.roleType}</FormHelperText>
      </FormControl>
    </Grid>
  );
};


const mapStateToProps = (state: State) => ({
  errors: getErrors(state)
});

export default connect(mapStateToProps)(SelectRoleType);
