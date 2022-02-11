import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getLoadingData } from '../../../../../../redux/selectors/data';
import { State } from '../../../../../../redux/redux-types';
// MUI Stuff
import { Box, ListItemText, ListItemIcon } from '@mui/material';
// Icons
import AddIcon from '@mui/icons-material/Add';
// Components
import MenuItem from '../../../../../navbar/menus/menu-item';
import RoleCnt from '../role-cnt';
import DialogInfo from '../../../../../dialogs/dialog-info';
// Functions
import { useOpen } from '../../../../../../utils/hooks';
// Types, Styles
import { fc_ } from '../../../../../../utils/styles';
import { CardType } from '../../../../../../../types';


const useStyles = () => ({
  item: {
    ...fc_,
    width: `100%`
  }
});


type Props = {
  loading?: boolean;
};


const AddRoleBtn: React.FC<Props> = ({ loading }) => {
  const sx = useStyles();

  const hookOpen = useOpen();
  const handleAdd = () => {
    if (loading) return;
    console.log('handleAdd');
    hookOpen.setOpen();
  };
  
  return (
    <>
      <MenuItem toolTitle="Добавить новую роль">
        <Box sx={sx.item} onClick={handleAdd}>
          <ListItemIcon><AddIcon /></ListItemIcon>
          <ListItemText primary='роль' />
        </Box>
      </MenuItem>
      
      <DialogInfo hookOpen={hookOpen} title="Новая роль" maxWidth="sm">
        <RoleCnt hookOpen={hookOpen} type={CardType.ADD} />
      </DialogInfo>
    </>
  )
};

const mapStateToProps = (state: State) => ({
  loading: getLoadingData(state)
});

export default connect(mapStateToProps)(AddRoleBtn);
