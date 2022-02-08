import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
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
import { useOpen } from '../../../../utils/hooks';
// Types, Styles
import { fc_ } from '../../../../utils/styles';
import { User } from '../../../../../types';


const useStyles = () => ({
  item: {
    ...fc_,
    width: `100%`
  }
});



type Props = {
};


const AddUserBtn: React.FC<Props> = ({ }) => {
  const sx = useStyles();

  const hookOpen = useOpen();
  const handleAdd = () => {
    console.log('handleAdd');
    hookOpen.setOpen();
  };
  
  return (
    <>
      <MenuItem
        toolTitle="Добавить пользователя"
      >
        <Box sx={sx.item} onClick={handleAdd}>
          <ListItemIcon><AddIcon /></ListItemIcon>
          <ListItemText primary='Добавить пользователя' />
        </Box>
      </MenuItem>
      
      <DialogInfo hookOpen={hookOpen} title="Новый пользователь">
        <NewUserCnt />
      </DialogInfo>
    </>
  )
};

const mapStateToProps = (state: State) => ({
});

export default connect(mapStateToProps)(AddUserBtn);
