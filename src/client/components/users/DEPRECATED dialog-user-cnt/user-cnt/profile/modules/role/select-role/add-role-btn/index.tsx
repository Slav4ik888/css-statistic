import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getLoading } from '../../../../../../../../../redux/selectors/ref-books';
import { State } from '../../../../../../../../../redux/redux-types';
// MUI Stuff
import { Box, ListItemText, ListItemIcon } from '@mui/material';
// Icons
import AddIcon from '@mui/icons-material/Add';
// Components
import MenuItem from '../../../../../../../../navbar/menus/menu-item';
import RoleCnt from '../role-cnt';
import DialogInfo from '../../../../../../../../dialogs/dialog-info';
// Functions
import { useGroup } from '../../../../../../../../../utils/hooks';
import { getEmptyRole } from '../../utils/get-empty-role';
// Types, Styles
import { fc_ } from '../../../../../../../../../utils/styles';
import { CardType, Role } from '../../../../../../../../../../types';



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
  const
    sx = useStyles(),
    R  = useGroup<Role>(false, getEmptyRole());

  const handleAdd = () => {
    if (loading) return;
    console.log('handleAdd');
    R.setOpen();
  };
  
  return (
    <>
      <MenuItem toolTitle='Добавить новую роль'>
        <Box sx={sx.item} onClick={handleAdd}>
          <ListItemIcon><AddIcon /></ListItemIcon>
          <ListItemText primary='роль' />
        </Box>
      </MenuItem>
      
      <DialogInfo
        hookOpen = {R}
        title    = 'Новая роль'
        maxWidth = 'sm'
        children = {<RoleCnt group={R} type={CardType.ADD} />}
      />
    </>
  )
};

const mapStateToProps = (state: State) => ({
  loading: getLoading(state)
});

export default connect(mapStateToProps)(AddRoleBtn);
