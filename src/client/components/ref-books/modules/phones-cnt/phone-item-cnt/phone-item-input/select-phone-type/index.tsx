import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getErrors } from '../../../../../../../redux/selectors/ui';
import { State } from '../../../../../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// Components
// Functions
import { arrFromObj } from '../../../../../../../../utils/objects/objects';
// Types
import { Errors, PhoneType } from '../../../../../../../../types';
// Styles
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  root: {
    // display: `flex`
    minWidth: `150px`
  },
});


type Props = {
  hook: { obj: PhoneType, setObject: (v: PhoneType) => void };
  errors: Errors;
}


const SelectPhoneType: React.FC<Props> = ({ hook, errors }) => {
  const sx = useStyles(useTheme());
  const PhonesArr = arrFromObj(PhoneType);
  
  const handleChange = (event: SelectChangeEvent) => {
    hook.setObject(event.target.value as PhoneType);
  };

  return (
    <Box sx={sx.root}>
      <FormControl fullWidth error={Boolean(errors?.phoneType)}>
        <InputLabel id="phone-type">Тип</InputLabel>
        <Select
          labelId="phone-type"
          value={hook.obj}
          label="Phone"
          onChange={handleChange}
          defaultValue={hook.obj}
        >
          {
            PhonesArr.map((type) => <MenuItem key={type.toString()} value={type.toString()}>
              {type}
              </MenuItem>)
          }
          
        </Select>
        <FormHelperText>{errors?.phoneType}</FormHelperText>
      </FormControl>
    </Box>
  );
};

const mapStateToProps = (state: State) => ({
  errors: getErrors(state)
});


export default connect(mapStateToProps)(SelectPhoneType);
