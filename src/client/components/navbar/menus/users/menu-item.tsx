import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { State } from '../../../../redux/redux-types';
// MUI Stuff
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
// Icons
import CompanyIcon from '@mui/icons-material/LocationCity';
import TruckIcon from '@mui/icons-material/LocalShipping';
import ContactIcon from '@mui/icons-material/Group';
import CargoIcon from '@mui/icons-material/ViewInAr';
import DriversIcon from '@mui/icons-material/Group';
// Components
// Types
// Styles
import { useTheme } from '@emotion/react';



const useStyles = (theme) => ({
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
  loadingRef? : boolean;
  onOpen      : (e: any) => void;
};


// Пункт меню Справочников для Navbar
const RefBookItem: React.FC<Props> = ({ loadingRef, onOpen }) => {
  const sx = useStyles(useTheme());

  
  return (
    <Box></Box>
    // <MenuItem id={item.id} disabled={item?.disabled || loadingRef}>
    //   <Tooltip title={item.toolLabel} arrow enterDelay={1000} enterNextDelay={1000}>
    //     <>
    //       <Box sx={sx.list_item} onClick={onOpen}>
    //         <ListItemIcon>{icon}</ListItemIcon>
    //         <ListItemText primary={item.label} />
    //       </Box>

    //       <StatusBar id={item.id} />
    //     </>
    //   </Tooltip>
    // </MenuItem>
  )
};

const mapStateToProps = (state: State) => ({
});

export default connect(mapStateToProps)(RefBookItem);
