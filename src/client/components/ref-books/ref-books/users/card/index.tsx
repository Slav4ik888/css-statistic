import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { addUser } from '../../../../../redux/actions/ref-books/users';
import { updateUser } from '../../../../../redux/actions/user';
import { getUserById } from '../../../../../redux/selectors/ref-books';
import { setErrors } from '../../../../../redux/actions/ui';
import { State } from '../../../../../redux/redux-types';
// Components
import CardContainer from '../../../../containers/cards/card-container';
import Content from './content';
import Actions from '../../../actions';
// Functions
import mergeWithTemplate from '../../../../users/merge-with-template';
import validateAndSubmit from '../../../../../../utils/validators/validate-and-submit';
import isChanges from '../../../../../utils/check-changes-in-submit';
// Types
import { Errors, User, CardType, Validator, RefbookId } from '../../../../../../types';
import { UseGroup } from '../../../../../utils/hooks';



type Props = {
  type           : CardType;
  userId?        : string;       // Созданный или выбранный userId
  storeUser?     : User;
  group          : UseGroup<User>;
  setErrors?     : (err: Errors) => void;
  addUser?    : (user: User) => void;
  updateUser? : (user: User) => void;
};


const CardUser: React.FC<Props> = ({ type, userId, storeUser, group: G, setErrors, addUser, updateUser }) => {
  const
    add        = type === CardType.ADD,
    edit       = !add,
    submitText = edit && 'Сохранить и закрыть';
   
  
  React.useEffect(() => { setErrors(null); }, []);
  React.useEffect(() => { G.setGroup(mergeWithTemplate(storeUser), true); }, [storeUser]);
  React.useEffect(() => { G.confirm && handleSubmit(false, true); }, [G.confirm]); // Если пользователь нажал Сохранить при Confirm
  

  const handleSubmit = (e: any, exit?: boolean) => {
    const
      checkStore = add ? mergeWithTemplate(storeUser) : storeUser;
    
    if (!isChanges(G, checkStore, G.group, exit)) return null;
    
    validateAndSubmit(
      add ? Validator.USER_ADD : Validator.USER_UPDATE,
      G.group, 
      add ? addUser : updateUser,
      setErrors,
      G,
      add ? false : true
    );
  };

  
  if (edit && !storeUser) return null;


  return (
    <CardContainer>
      <Content group={G} type={type} />
      
      <Actions
        id             = {userId}
        disabledDelete = {add}
        refbookId      = {RefbookId.USERS}
        email          = {G?.group?.email}
        hookOpen       = {G}
        submitText     = {submitText}
        onSubmit       = {handleSubmit}
      />
    </CardContainer>
  );
};

const mapStateToProps = (state: State, props: Props) => ({
  storeUser: getUserById(state, props)
});

const mapActionsToProps = {
  setErrors, addUser, updateUser
};

export default connect(mapStateToProps, mapActionsToProps)(CardUser);
