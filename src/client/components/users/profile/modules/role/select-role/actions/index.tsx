import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getLoadingRef } from '../../../../../../../redux/selectors/ref-books';
import { addRole, updateRole } from '../../../../../../../redux/actions/ref-books';
import { State } from '../../../../../../../redux/redux-types';
// Components
import Actions from '../../../../../../containers/actions';
// Types, Styles
import { CardType, Role } from '../../../../../../../../types';
import { UseGroup } from '../../../../../../../utils/hooks';



type Props = {
  loading?    : boolean;
  type        : CardType;
  group       : UseGroup<Role>;
  addRole?    : (role: Role) => void;
  updateRole? : (role: Role) => void;
};


const ActionsRole: React.FC<Props> = ({ loading, type, group: G, addRole, updateRole }) => {
  const
    edit = type === CardType.EDIT;

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
    <Actions
      loading  = {loading}
      hookOpen = {G}
      onDel    = {handleDel}
      onSubmit = {handleSubmit}
    />
  )
};

const mapStateToProps = (state: State) => ({
  loading: getLoadingRef(state)
});

const mapActionsToProps = {
  addRole, updateRole
};

export default connect(mapStateToProps, mapActionsToProps)(ActionsRole);
