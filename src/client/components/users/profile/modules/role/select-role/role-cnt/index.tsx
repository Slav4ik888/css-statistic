import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { State } from '../../../../../../../redux/redux-types';
// MUI Stuff
import { Box } from '@mui/material';
// Components
import Actions from '../actions';
// Functions
// Types, Styles
import { CardType, Role } from '../../../../../../../../types';
import { TextField } from '../../../../../../containers/elements';
import { UseGroup } from '../../../../../../../utils/hooks';



const useStyles = () => ({
  root: {
    mt: 3,
    width: `100%`
  }
});


type Props = {
  type  : CardType;
  group : UseGroup<Role>;
};


const RoleCnt: React.FC<Props> = ({ type, group: G }) => {
  const sx = useStyles();

  const edit = type === CardType.EDIT;
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
        group    = {G}
      />
    </Box>
  )
};

const mapStateToProps = (state: State) => ({
});

export default connect(mapStateToProps)(RoleCnt);
