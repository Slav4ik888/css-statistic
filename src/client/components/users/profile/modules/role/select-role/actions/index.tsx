import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getLoadingData } from '../../../../../../../redux/selectors/data';
import { addRole, updateRole } from '../../../../../../../redux/actions/data';
import { State } from '../../../../../../../redux/redux-types';
// MUI Stuff
import { Box } from '@mui/material';
// Components
import Actions from '../../../../../../containers/actions';
// Functions
// Types, Styles
import { CardType, Role } from '../../../../../../../../types';
import { UseGroup, UseOpen } from '../../../../../../../utils/hooks/types';


const useStyles = () => ({
  
});


type Props = {
  loading?    : boolean;
  type        : CardType;
  group       : UseGroup<Role>;
  addRole?    : (role: Role) => void;
  updateRole? : (role: Role) => void;
};


const ActionsRole: React.FC<Props> = ({ loading, type, group: G, addRole, updateRole }) => {
  const sx = useStyles();

  const edit = type === CardType.EDIT;

  const handleSubmit = () => {
    if (edit) updateRole(G.group)
    else addRole(G.group)

    G.setClose();
  };

  const handleDel = () => {
    console.log(`handleDel`);
    G.setClose();
  };
  
  return (
    <>
      <Actions
        loading  = {loading}
        hookOpen = {G}
        onDel    = {handleDel}
        onSubmit = {handleSubmit}
      />
    </>
  )
};

const mapStateToProps = (state: State) => ({
  loading: getLoadingData(state)
});

const mapActionsToProps = {
  addRole, updateRole
};

export default connect(mapStateToProps, mapActionsToProps)(ActionsRole);
