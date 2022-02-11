import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getLoadingData } from '../../../../../../redux/selectors/data';
import { addRole } from '../../../../../../redux/actions/data';
import { State } from '../../../../../../redux/redux-types';
// MUI Stuff
import { Box } from '@mui/material';
// Components
import Actions from '../../../../../containers/actions';
// Functions
// Types, Styles
import { CardType, Role } from '../../../../../../../types';
import { UseGroup, UseOpen } from '../../../../../../utils/hooks/types';


const useStyles = () => ({
  
});


type Props = {
  loading? : boolean;
  type     : CardType;
  group    : UseGroup<Role>;
  hookOpen : UseOpen;
  role     : Role;
  addRole? : (role: Role) => void;
};


const ActionsRole: React.FC<Props> = ({ loading, type, role, group: G, hookOpen, addRole }) => {
  const sx = useStyles();

  const edit = type === CardType.EDIT;

  const handleSubmit = () => {
    if (edit) console.log(`updateRole`);
    else addRole(G.group);

    G.setClose();
    hookOpen.setClose();
  };

  const handleDel = () => {
    console.log(`handleDel`);
    G.setClose();
    hookOpen.setClose();
  };
  
  return (
    <Box>
      <Actions
        loading  = {loading}
        hookOpen = {G}
        onDel    = {handleDel}
        onSubmit = {handleSubmit}
      />
    </Box>
  )
};

const mapStateToProps = (state: State) => ({
  loading: getLoadingData(state)
});

const mapActionsToProps = {
  addRole
};

export default connect(mapStateToProps, mapActionsToProps)(ActionsRole);
