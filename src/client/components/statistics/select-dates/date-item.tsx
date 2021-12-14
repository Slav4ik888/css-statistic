import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import { Box, TextField, Typography } from '@mui/material';
// Components
// Functions
import changeModule from '../../../utils/hooks/change-module';
// Types
import { DateItemType, Errors, SelectedDates } from '../../../../types';
import { UseModule } from '../../../utils/hooks/types';
import { fcc, fc_fe } from '../../../utils/styles';
import { getErrors } from '../../../redux/selectors/ui';



type Props = {
  type    : DateItemType;
  module  : UseModule<SelectedDates>;
  errors? : Errors;
};


const SelectDateItem: React.FC<Props> = ({ type, module, errors }) => {
  const from = type === DateItemType.FROM;

  const startLabel = from ? `С`        : `По`;
  const endLabel   = from ? `00:00:01` : `23:59:59`;
  const error = React.useMemo(() => from ? errors?.dateFrom : errors?.dateTo, [errors]);
  const value = React.useMemo(() => from ? module.obj.from : module.obj.to, [module.obj]);
  console.log('value: ', value);

  const handleChange = (e: any) => {
    const value = e.target.value;
    changeModule(module, value, `${type}`)
  };

  return (
    <Box sx={{ ...fcc, mt: 4 }}>
      <Box sx={{ ...fc_fe, width: 340, color: `#a9a9a9` }}>
        <Typography sx={{ textAlign: `center` }}>{startLabel}</Typography>
        <TextField
          id       = {`date-${type}`}
          // label    = {`SelectDateItem-${type}`}
          value    = {value}
          type     = "date"
          sx       = {{ width: 170, mx: 3 }}
          onChange = {handleChange}
          error    = {Boolean(error)}
          helperText      = {error ? error : null}
          InputLabelProps = {{ shrink: true }}
        />
        <Typography>{endLabel}</Typography>
      </Box>
    </Box>
  );
};


const mapStateToProps = (state: State) => ({
  errors: getErrors(state)
});


export default connect(mapStateToProps)(SelectDateItem);