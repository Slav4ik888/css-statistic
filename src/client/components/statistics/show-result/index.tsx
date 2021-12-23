import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { State } from '../../../redux/redux-types';
import { getStatsLoading, getDBs, getSelectedDates } from '../../../redux/selectors/stats';
// MUI Stuff
import { Paper } from '@mui/material';
// Components
import CircularProgress from '../../buttons/circular-progress/circular-progress';
import RefreshBtn from './rerfresh-btn';
import TableCnt from './table-cnt';
// Functions
import calcsAllResults from '../../../utils/calculations';
// Types & Consts
import { UseOpen } from '../../../utils/hooks/types';
import { DBsType, SelectedDates } from '../../../../types';
// Styles
import { FlexDirection, Position } from '../../../utils/styles';
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN,
    position: Position.REL,
    mt: 5,
    p: 4,
    width: 960,
    backgroundColor: theme.paper.background
  }
});


type Props = {
  loading?   : boolean;
  hookResult : UseOpen;
  DBs?       : DBsType;
  dates?     : SelectedDates; 
};


const ShowResult: React.FC<Props> = ({ loading, hookResult, DBs, dates }) => {
  if (hookResult.close) return null;
  if (loading) return <CircularProgress size={50} loading={loading} center block />;
  const sx = useStyles(useTheme());

  const calcResults = React.useMemo(() => calcsAllResults(DBs, dates.from, dates.to), [DBs, dates]);
  console.log('calcResults: ', calcResults);


  return (
    <Paper sx={sx.root}>
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