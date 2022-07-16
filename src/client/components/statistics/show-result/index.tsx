import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { State } from '../../../redux/redux-types';
import { getStatsLoading, getDBs, getSelectedDates } from '../../../redux/selectors/stats';
// MUI Stuff
import { Paper } from '@mui/material';
// Components
import CircularProgress from '../../buttons/circular-progress';
import RefreshBtn from './rerfresh-btn';
import TableCnt from './table-cnt';
// Functions
import calcsAllResults from '../../../utils/calculations';
// Types & Styles
import { UseValue } from '../../../utils/hooks';
import { DBsType, SelectedDates } from '../../../../types';
import { FlexDirection, Position, Themes } from '../../../utils/styles';
import { useTheme } from '@emotion/react';



const useStyles = (theme: Themes) => ({
  root: {
    display         : `flex`,
    flexDirection   : FlexDirection.COLUMN,
    position        : Position.REL,
    width           : 960,
    backgroundColor : theme.paper.background,
    mt              : 5,
    p               : 4
  }
});


type Props = {
  loading?   : boolean;
  hookResult : UseValue<any>;
  DBs?       : DBsType;
  dates?     : SelectedDates; 
};


const ShowResult: React.FC<Props> = ({ loading, hookResult, DBs, dates }) => {
  const
    sx = useStyles(useTheme() as Themes),
    calcResults = React.useMemo(() => calcsAllResults(DBs, dates.from, dates.to), [DBs, dates]);
  
  console.log('calcResults: ', calcResults);
  if (!hookResult.open) return null;


  return (
    <Paper sx={sx.root}>
      <CircularProgress size={50} loading={loading} center block />
      <RefreshBtn hookResult={hookResult} />
      <TableCnt calcResults={calcResults} />
    </Paper>
  );
};


const mapStateToProps = (state: State) => ({
  loading : getStatsLoading(state),
  DBs     : getDBs(state),
  dates   : getSelectedDates(state)
});

export default connect(mapStateToProps)(ShowResult);