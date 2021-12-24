import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getErrors } from '../../../redux/selectors/ui';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import { Box, TextField, Typography } from '@mui/material';
// Functions
import changeGroup from '../../../utils/hooks/change-group';
import getOneOf from '../../../../utils/one-of/one-of-two';
import { getLastDateFrom } from '../../../utils/get-last-week-dates';
// Types
import { DateItemType, Errors, SelectedDates } from '../../../../types';
import { UseGroup } from '../../../utils/hooks/types';
// Styles
import { fcc, fc_fe } from '../../../utils/styles';



type Props = {
  type    : DateItemType;
  group   : UseGroup<SelectedDates>;
  errors? : Errors;
};


const SelectDateItem: React.FC<Props> = ({ type, group: G, errors }) => {
  const from = type === DateItemType.FROM;

  const startLabel = getOneOf(from, [`С`, `По`]);
  const endLabel   = getOneOf(from, [`00:00:01`, `23:59:59`]);

  const error = React.useMemo(() => from ? errors?.dateFrom : errors?.dateTo, [errors]);
  const defaultValue = React.useMemo(() => getLastDateFrom(from), [G.group]);

  const handleChange = (e: any) => {
    changeGroup(G, [{ value: e.target.value, scheme: type }])
  };

  return (
    <Box sx={{ ...fcc, mt: 4 }}>
      <Box sx={{ ...fc_fe, width: 340, color: `#a9a9a9` }}>
        <Typography sx={{ textAlign: `center` }}>
          {startLabel}
        </Typography>
        
        <TextField
          id              = {`date-${type}`}
          defaultValue    = {defaultValue}
          type            = "date"
          sx              = {{ width: 170, mx: 3 }}
          onChange        = {handleChange}
          error           = {Boolean(error)}
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