import * as React from 'react';
// Redux
import { State } from '../../../redux/redux-types';
import { getLoadingUser, getUser } from '../../../redux/selectors/user';
import { updateUser, updateAnyUser } from '../../../redux/actions/user';
import { setErrors } from '../../../redux/actions/ui';
import { connect } from 'react-redux';
// Components
import Personal from './modules/personal';
import Role from './modules/role';
import Actions from '../../containers/actions';
// Functions
import { empty } from '../../../../utils/objects';
import validateAndSubmit from '../../../../utils/validators/validate-and-submit';
// Types
import { User, CardType, Validator } from '../../../../types';
import { UseGroup } from '../../../utils/hooks/types';



type Props = {
  loading?    : boolean;
  type        : CardType;
  user?       : User;
  group       : UseGroup<User>; // Selected User
  setErrors?  : () => void;
  updateUser? : (u: User) => void;
};


const UserProfile: React.FC<Props> = ({ loading, type, group: G, user, setErrors, updateUser }) => {
  if (empty(G.group)) return null;
  
  const handleSubmit = (e?: any, exit?: boolean) => {
    // Проверка на наличие изменений
    // if (!isChanges(G, storeFlight, G.group, exit)) return null;
    const func = G.group.id === user.id ? updateUser : updateAnyUser;

    // Валидация данных
    validateAndSubmit(Validator.USER_UPDATE, G.group, func, setErrors, G, exit);
  };


  return (
    <>
      <Personal group={G} type={type} />
      <Role group={G} />

      <Actions
        loading  = {loading}
        hookOpen = {G}
        onClose  = {G.setClose}
        onSubmit = {handleSubmit}
      />
    </>
  );
};

const mapStateToProps = (state: State) => ({
  loading: getLoadingUser(state),
  user: getUser(state)
});

const mapActionsToProps = {
  updateUser, updateAnyUser, setErrors
}

export default connect(mapStateToProps, mapActionsToProps)(UserProfile);
