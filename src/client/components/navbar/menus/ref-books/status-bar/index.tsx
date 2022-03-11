import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { loadRefBook } from '../../../../../redux/actions/ref-books';
import { getRefStatuses } from '../../../../../redux/selectors/ref-books';
import { State } from '../../../../../redux/redux-types';
// MUI Stuff
import { Box, Tooltip } from '@mui/material';
// Icons
import RefreshIcon from '@mui/icons-material/Refresh';
// Types
import { RefBookId, RefBookItem, RefBookStatus } from '../../../../../../types';
// Styles
import { useTheme } from '@emotion/react';

import { getStyleByStatus } from '../../../../../utils/styles';


const useStyles = (theme, status: RefBookStatus) => ({
  root: {
    display: `flex`,
    alignItems: `center`,
    width: 60
  },
  icon: {
    width: 20,
    height: 20,
    mr: 2,
    color: `#dae0e5`,
    '& .MuiSvgIcon-root': {
      width: `0.8em`,
      height: `0.8em`
    }
  },
  status: {
    borderRadius: `50%`,
    width: 7,
    height: 7,
    backgroundColor: () => getStyleByStatus(status)?.background
  }
});

type Props = {
  statuses?    : keyof RefBookItem;
  id           : RefBookId;
  loadRefBook? : (id: RefBookId) => void;
};


const RefBookStatusBar: React.FC<Props> = ({ id, statuses, loadRefBook }) => {
  const status = statuses?.[id];
  if (!status) return null;

  const sx = useStyles(useTheme(), status);

  const handleRefresh = () => loadRefBook(id);
  
  return (
    <Box sx={sx.root}>
      <Tooltip title="Обновить справочник" arrow enterDelay={1000} enterNextDelay={1000}>
        <Box sx={sx.icon} onClick={handleRefresh}>
          <RefreshIcon />
        </Box>
      </Tooltip>

      <Tooltip title={statuses?.[id]} arrow enterDelay={1000} enterNextDelay={1000}>
        <Box sx={sx.status} />
      </Tooltip>
    </Box>
  );
};


const mapStateToProps = (state: State) => ({
  statuses: getRefStatuses(state)
});

const mapActionsToProps = {
  loadRefBook
};


export default connect(mapStateToProps, mapActionsToProps)(RefBookStatusBar);