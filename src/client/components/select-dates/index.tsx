import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { setSelectedDates, loadData } from '../../redux/actions/data';
import { setErrors } from '../../redux/actions/ui';
// MUI Stuff
import { Box, Paper } from '@mui/material';
// Components
import Header from './header';
import DateItem from './date-item';
import Action from './action';
// Functions
import { DateItemType, Errors, SelectedDates } from '../../../types';
import { useModule } from '../../utils/hooks/hooks';
import validSelectedDates from '../../../utils/validators/selected-dates';
// Styles
import { FlexDirection, f_c } from '../../utils/styles';
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN,
    mt: 5,
    p: 4,
    width: 520,
    backgroundColor: theme.paper.background
  }
});


type Props = {
  setErrors?        : (e: Errors) => void;
  setSelectedDates? : (obj: SelectedDates) => void;
  loadData?         : () => void;
};


const SelectDates: React.FC<Props> = ({ setSelectedDates, setErrors, loadData }) => {
  const sx = useStyles(useTheme());
  React.useEffect(() => setErrors(null), []);

  const date = useModule<SelectedDates>();

  const handleCalc = () => {
    const { errors, valid } = validSelectedDates(date.obj);
    if (!valid) return setErrors(errors)

    setErrors(null);
    setSelectedDates(date.obj);
    loadData(); // Загружаем данные с Гугла
  };


  return (
    <Box sx={{ ...f_c }}>
      <Paper sx={sx.root}>
        <Header />
        <DateItem type={DateItemType.FROM} module={date} />
        <DateItem type={DateItemType.TO}   module={date} />
        <Action onCalc={handleCalc} />
      </Paper>
    </Box>
  );
};


const mapActionsToProps = {
  setSelectedDates, setErrors, loadData
};

export default connect(undefined, mapActionsToProps)(SelectDates);