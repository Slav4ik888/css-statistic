import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { setSelectedDates, loadData } from '../../../redux/actions/stats';
import { setErrors } from '../../../redux/actions/ui';
// MUI Stuff
import { Paper } from '@mui/material';
// Components
import Header from './header';
import DateItem from './date-item';
import Action from './action';
// Functions
import { useModule } from '../../../utils/hooks/hooks';
import validSelectedDates from '../../../../utils/validators/selected-dates';
import changeModule from '../../../utils/hooks/change-module';
// Types
import { DateItemType, Errors, SelectedDates } from '../../../../types';
import { UseOpen } from '../../../utils/hooks/types';
// Styles
import { FlexDirection } from '../../../utils/styles';
import { useTheme } from '@emotion/react';
import { cfg } from '../../../../../config';


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
  hookResult        : UseOpen;
  setErrors?        : (e: Errors) => void;
  setSelectedDates? : (obj: SelectedDates) => void;
  loadData?         : () => void;
};


const SelectDates: React.FC<Props> = ({ hookResult, setSelectedDates, setErrors, loadData }) => {
  if (hookResult.open) return null;
  
  const sx = useStyles(useTheme());
  React.useEffect(() => setErrors(null), []);

  const date = useModule<SelectedDates>();
  React.useEffect(() => cfg.isDev ? changeModule(date, [cfg.devData.from, cfg.devData.to], [`from`, `to`]) : null, []);


  const handleCalc = () => {
    const { errors, valid } = validSelectedDates(date.obj);
    if (!valid) return setErrors(errors)

    setErrors(null);
    setSelectedDates(date.obj);
    hookResult.setOpen();
    loadData(); // Загружаем данные с Гугла
  };


  return (
    <Paper sx={sx.root}>
      <Header />
      <DateItem type={DateItemType.FROM} module={date} />
      <DateItem type={DateItemType.TO}   module={date} />
      <Action onCalc={handleCalc} />
    </Paper>
  );
};


const mapActionsToProps = {
  setSelectedDates, setErrors, loadData
};

export default connect(undefined, mapActionsToProps)(SelectDates);