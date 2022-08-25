import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getLoading } from '../../../../../redux/selectors/bx';
import { State } from '../../../../../redux/redux-types';
// MUI Stuff
import { Box, Divider, ListItemText } from '@mui/material';
// Components
import MenuItem from '../../menu-item';
// Types & Styles
import { BxMenuItem } from '../../../../../../types';



const useStyles = () => ({
  root: {
    display: `flex`,
    width: 280
  },
  list_item: {
    display: `flex`,
    alignItems: `center`,
    width: 200
  }
});


type Props = {
  loading? : boolean;
  item     : BxMenuItem;
  onOpen   : (e: any) => void;
};


/** Menu point of BX24 for Navbar */
const BxMenuItemLogics: React.FC<Props> = ({ loading, item, onOpen }) => {
  const sx = useStyles();

  if (!item.label) return <Divider />

  
  return (
    <MenuItem id={item.id} disabled={!item?.active || loading} onClick={onOpen}>
      <Box sx={sx.list_item} >
        <ListItemText primary={item.label} />
      </Box>
    </MenuItem>
  )
};

const mapStateToProps = (state: State) => ({
  loading: getLoading(state)
});

export default connect(mapStateToProps)(BxMenuItemLogics);
