import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { State } from '../../../../../../redux/redux-types';
// MUI Stuff
import { Box } from '@mui/material';
// Components
import Actions from '../actions';
// Functions
import { useGroup } from '../../../../../../utils/hooks';
// Types, Styles
import { CardType, Role } from '../../../../../../../types';
import { getEmptyRole } from './utils/get-empty-role';
import { TextField } from '../../../../../containers/elements';
import { UseOpen } from '../../../../../../utils/hooks/types';


const useStyles = () => ({
  root: {
    mt: 3,
    width: `100%`
  }
});


type Props = {
  type     : CardType;
  role?    : Role;
  hookOpen : UseOpen;
};


const RoleCnt: React.FC<Props> = ({ type, role, hookOpen }) => {
  const sx = useStyles();

  const edit = type === CardType.EDIT;
  const G = useGroup<Role>(false, edit ? role : getEmptyRole());
  console.log('G: ', G.group);
  
  return (
    <Box sx={sx.root}>
      <TextField
        grid        = {{ sm: 12 }}
        label       = 'Роль'
        placeholder = 'Введите название роли'
        group       = {G}
        scheme      = 'role'
        fullWidth
      />

      <Actions 
        type     = {type}
        role     = {role}
        hookOpen = {hookOpen}
        group    = {G}
      />
    </Box>
  )
};

const mapStateToProps = (state: State) => ({
});

export default connect(mapStateToProps)(RoleCnt);
