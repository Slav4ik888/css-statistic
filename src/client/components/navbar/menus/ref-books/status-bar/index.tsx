import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { loadRefbook } from '../../../../../redux/actions/ref-books';
import { getRefStatuses } from '../../../../../redux/selectors/ref-books';
import { State } from '../../../../../redux/redux-types';
// MUI Stuff
import { Box, Tooltip } from '@mui/material';
// Icons
import RefreshIcon from '@mui/icons-material/Refresh';
// Types & Styles
import { RefbookId, RefbookItem, RefbookStatus } from '../../../../../../types';
import { getStyleByStatus } from '../../../../../utils/styles';



const useStyles = (status: RefbookStatus) => ({
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
  statuses?    : keyof RefbookItem;
  id           : RefbookId;
  loadRefbook? : (id: RefbookId) => void;
};


const RefbookStatusBar: React.FC<Props> = ({ id, statuses, loadRefbook }) => {
  const
    status        = statuses?.[id],
    sx            = useStyles(status),
    handleRefresh = () => loadRefbook(id);
  
  if (!status) return null;

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
  loadRefbook
};


export default connect(mapStateToProps, mapActionsToProps)(RefbookStatusBar);