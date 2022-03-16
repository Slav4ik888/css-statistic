import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { addRefUser, updateRefUser } from '../../../../../redux/actions/ref-books/users';
import { getUserById } from '../../../../../redux/selectors/ref-books';
import { setErrors } from '../../../../../redux/actions/ui';
import { State } from '../../../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import Content from './content';
import Actions from '../../../actions';
// Functions
import mergeWithTemplate from '../../../../users/merge-with-template';
import validateAndSubmit from '../../../../../../utils/validators/validate-and-submit';
import isChanges from '../../../../../utils/check-changes-in-submit';
// Types
import { Errors, User, CardType, Validator, RefBookId } from '../../../../../../types';
import { UseGroup } from '../../../../../utils/hooks/types';



type Props = {
  type           : CardType;
  userId?        : string;       // Созданный или выбранный userId
  storeUser?     : User;
  group          : UseGroup<User>;
  setErrors?     : (err: Errors) => void;
  addRefUser?    : (userData: User) => void;
  updateRefUser? : (userData: User) => void;
}


const CardUser: React.FC<Props> = ({ type, userId, storeUser, group: G, setErrors, addRefUser, updateRefUser }) => {
  if (type === CardType.EDIT && !storeUser) return null;

  const
    add       = type === CardType.ADD,
    validator = add ? Validator.USER_ADD : Validator.USER_UPDATE,
    execute   = add ? addRefUser : updateRefUser;

  React.useEffect(() => setErrors(null), []);
  React.useEffect(() => G.setGroup(mergeWithTemplate(storeUser)), [storeUser]);
  

  const handleSubmit = (e: any, exit?: boolean) => {
    // Проверка на наличие изменений
    const checkStore = add ? mergeWithTemplate(storeUser) : storeUser
    if (!isChanges(G, checkStore, G.group, exit)) return null;
    
    // Валидация и отправка данных (или вывод об ошибке)
    validateAndSubmit(validator, G.group, execute, setErrors, G, true);
  };

  React.useEffect(() => {
    if (G.confirm) handleSubmit(false, true); // Если пользователь нажал Сохранить при Confirm
  }, [G.confirm]);
  

  return (
    <Box component="form" noValidate sx={{ display: `flex`, flexDirection: `column` }}>

      <Content group={G} type={type} />
      
      <Actions
        disabledDelete = {add}
        refBookId      = {RefBookId.USERS}
        id             = {userId}
        email          = {G?.group?.email}
        hookOpen       = {G}
        onSubmit       = {handleSubmit}
      />
    </Box>
  );
};

const mapStateToProps = (state: State, props: Props) => ({
  storeUser: getUserById(state, props)
});

const mapActionsToProps = {
  setErrors, addRefUser, updateRefUser
};

export default connect(mapStateToProps, mapActionsToProps)(CardUser);
