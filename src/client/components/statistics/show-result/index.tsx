import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { State } from '../../../redux/redux-types';
import { getStatsLoading, getDBs, getSelectedDates } from '../../../redux/selectors/stats';
// MUI Stuff
import { Paper } from '@mui/material';
// Components
import TableCnt from './table-cnt';
import CircularProgress from '../../buttons/circular-progress/circular-progress';
// Functions
import calcsAllResults from '../../../utils/calculations';
// Types
import { UseOpen } from '../../../utils/hooks/types';
// Styles
import { FlexDirection } from '../../../utils/styles';
import { useTheme } from '@emotion/react';
import { DBsType, SelectedDates } from '../../../../types';


const useStyles = (theme) => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN,
    mt: 5,
    p: 4,
    width: 900,
    backgroundColor: theme.paper.background
  }
});


type Props = {
  loading?   : boolean;
  hookResult : UseOpen;
  DBs?       : DBsType;
  dates?     : SelectedDates; 
  loadData?  : () => void;
};


const ShowResult: React.FC<Props> = ({ loading, hookResult, DBs, dates }) => {
  if (hookResult.close) return null;
  if (loading) return <CircularProgress size={50} loading={loading} center block />;
  const sx = useStyles(useTheme());

  const calcsResults = React.useMemo(() => calcsAllResults(DBs, dates.from, dates.to), [DBs, dates]);
  console.log('calcsResults: ', calcsResults);

  const handleRefresh = () => {
    hookResult.setOpen();
  };

  return (
    <Paper sx={sx.root}>
      <TableCnt />
    </Paper>
  );
};


const mapStateToProps = (state: State) => ({
  loading: getStatsLoading(state),
  DBs: getDBs(state),
  dates: getSelectedDates(state)
});

const mapActionsToProps = {
};

export default connect(mapStateToProps, mapActionsToProps)(ShowResult);