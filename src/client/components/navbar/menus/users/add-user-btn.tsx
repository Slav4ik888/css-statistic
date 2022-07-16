import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getLoadingRef } from '../../../../redux/selectors/ref-books';
import { State } from '../../../../redux/redux-types';
// MUI Stuff
import { Box, ListItemText, ListItemIcon } from '@mui/material';
// Icons
import AddIcon from '@mui/icons-material/Add';
// Components
import MenuItem from '../menu-item';
import NewUserCnt from '../../../users/new-user-cnt';
import DialogInfo from '../../../dialogs/dialog-info';
// Functions
import { useValue } from '../../../../utils/hooks';
// Types, Styles
import { fc_ } from '../../../../utils/styles';



const useStyles = () => ({
  item: {
    ...fc_,
    width: `100%`
  }
});


type Props = {
  loading?: boolean;
};


const AddUserBtn: React.FC<Props> = ({ loading }) => {
  const
    sx       = useStyles(),
    hookOpen = useValue();
  
  const handleAdd = () => {
    if (loading) return;
    console.log('handleAdd');
    hookOpen.setOpen();
  };
  
  return (
    <>
      <MenuItem
        toolTitle="Добавить нового пользователя"
      >
        <Box sx={sx.item} onClick={handleAdd}>
          <ListItemIcon><AddIcon /></ListItemIcon>
          <ListItemText primary='пользователя' />
        </Box>
      </MenuItem>
      
      <DialogInfo hookOpen={hookOpen} title="Новый пользователь">
        <NewUserCnt />
      </DialogInfo>
    </>
  )
};

const mapStateToProps = (state: State) => ({
  loading: getLoadingRef(state)
});

export default connect(mapStateToProps)(AddUserBtn);
