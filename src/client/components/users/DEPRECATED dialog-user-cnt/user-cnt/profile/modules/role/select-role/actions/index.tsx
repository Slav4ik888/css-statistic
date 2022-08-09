import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getLoading } from '../../../../../../../../../redux/selectors/ref-books';
import { addRole, updateRole } from '../../../../../../../../../redux/actions/ref-books';
import { State } from '../../../../../../../../../redux/redux-types';
// Components
import Actions from '../../../../../../../../containers/actions';
// Types, Styles
import { CardType, Role } from '../../../../../../../../../../types';
import { UseGroup } from '../../../../../../../../../utils/hooks';



type Props = {
  loading?    : boolean;
  type        : CardType;
  group       : UseGroup<Role>;
  addRole?    : (role: Role) => void;
  updateRole? : (role: Role) => void;
};


const ActionsRole: React.FC<Props> = ({ loading, type, group: R, addRole, updateRole }) => {
  const
    edit = type === CardType.EDIT;

  const handleSubmit = () => {
    if (edit) updateRole(R.group)
    else addRole(R.group)

    R.setClose();
  };

  const handleDel = () => {
    console.log(`handleDel`);
    R.setClose();
  };
  
  return (
    <Actions
      loading  = {loading}
      hookOpen = {R}
      onDel    = {handleDel}
      onSubmit = {handleSubmit}
    />
  )
};

const mapStateToProps = (state: State) => ({
  loading: getLoading(state)
});

const mapActionsToProps = {
  addRole, updateRole
};

export default connect(mapStateToProps, mapActionsToProps)(ActionsRole);
