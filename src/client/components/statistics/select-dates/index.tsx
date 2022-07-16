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
import { useGroup } from '../../../utils/hooks/use-group';
import validSelectedDates from '../../../../utils/validators/selected-dates';
import { UseValue, changeGroup } from '../../../utils/hooks';
import { getLastDateFrom } from '../../../utils/get-last-week-dates';
// Types & Styles
import { DateItemType, Errors, SelectedDates } from '../../../../types';
import { FlexDirection, Themes } from '../../../utils/styles';
import { useTheme } from '@emotion/react';
import { cfg } from '../../../../../config';



const useStyles = (theme: Themes) => ({
  root: {
    display         : `flex`,
    flexDirection   : FlexDirection.COLUMN,
    width           : 520,
    backgroundColor : theme.paper.background,
    mt              : 5,
    p               : 4
  }
});


type Props = {
  hookResult        : UseValue<any>;
  setErrors?        : (e: Errors) => void;
  setSelectedDates? : (obj: SelectedDates) => void;
  loadData?         : () => void;
};


const SelectDates: React.FC<Props> = ({ hookResult, setSelectedDates, setErrors, loadData }) => {
  const
    sx   = useStyles(useTheme() as Themes),
    date = useGroup<SelectedDates>();
  
  React.useEffect(() => { setErrors(null); }, []);

  React.useEffect(() => {
    const
      from = cfg.isDev ? cfg.devData.from : getLastDateFrom(true),
      to   = cfg.isDev ? cfg.devData.to   : getLastDateFrom(false);
    
    changeGroup(date, [{ value: from, scheme: `from` }, { value: to, scheme: `to` }])
  }, []);


  const handleCalc = () => {
    const { errors, valid } = validSelectedDates(date.group);
    if (!valid) return setErrors(errors)

    setErrors(null);
    setSelectedDates(date.group);
    hookResult.setOpen();
    loadData(); // Загружаем данные с Гугла
  };

  if (hookResult.open) return null;

  return (
    <Paper sx={sx.root}>
      <Header />
      <DateItem type={DateItemType.FROM} group={date} />
      <DateItem type={DateItemType.TO}   group={date} />
      <Action onCalc={handleCalc} />
    </Paper>
  );
};


const mapActionsToProps = {
  setSelectedDates, setErrors, loadData
};

export default connect(undefined, mapActionsToProps)(SelectDates);
