import * as React from 'react';
// MUI Stuff
import { Tooltip, Box, Divider, MenuItem, ListItemIcon, ListItemText }from '@mui/material';
// Icons
import StatisticsIcon from '@mui/icons-material/QueryStats';
// Components
// Types
import { TestingMenuItem, TestingType } from '../../../../../../types';
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
  item   : TestingMenuItem;
  onOpen : (e: any) => void;
};


// Пункт меню Справочников для Navbar
const TestingMenuItemCnt: React.FC<Props> = ({ item, onOpen }) => {
  const sx = useStyles(useTheme());

  if (!item.label) return <Divider />

  let icon = null;

  switch (item?.id) {
    case TestingType.STATISTICS: icon = <StatisticsIcon />; break;
  }

  
  return (
    <MenuItem id={item.id}>
      <Tooltip title={item.toolLabel} arrow enterDelay={1000} enterNextDelay={1000}>
        <Box sx={sx.list_item} onClick={onOpen}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={item.label} />
        </Box>
      </Tooltip>
    </MenuItem>
  )
};

export default TestingMenuItemCnt;