import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { addRefUser, updateRefUser } from '../../../../../redux/actions/ref-books/users';
import { getUserById } from '../../../../../redux/selectors/ref-books';
import { setErrors } from '../../../../../redux/actions/ui/ui';
import { State } from '../../../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import Content from './content';
import Actions from '../../../actions/actions';
// Functions
import mergeWithTemplate from '../../../../user/profile/merge-with-template';
import validUserData from '../../../../../../utils/validators/user-data/user-data';
import validUserDataNew from '../../../../../../utils/validators/user-data-new/user-data-new';
import validAndSendSubmitData from '../../../../../../utils/validators/submit-data';
import isChanges from '../../../../../utils/check-changes-in-submit';
// Types
import { Errors, User, UserCardType } from '../../../../../../types';
import { UseGroup } from '../../../../../utils/hooks/types';



type Props = {
  type           : UserCardType;
  userId?        : string;       // Созданный или выбранный userId
  storeUser?     : User;
  group          : UseGroup<User>;
  setErrors?     : (err: Errors) => void;
  addRefUser?    : (userData: User) => void;
  updateRefUser? : (userData: User) => void;
}


const CardUser: React.FC<Props> = ({ type, userId, storeUser, group: G, setErrors, addRefUser, updateRefUser }) => {
  if (type === UserCardType.EDIT && !storeUser) return null;

  const add = type === UserCardType.ADD;
  const validateData = add ? validUserDataNew : validUserData;

  React.useEffect(() => setErrors(null), []);
  React.useEffect(() => G.setGroup(mergeWithTemplate(storeUser)), [storeUser]);
  

  const handleSubmit = (e?: any, exit?: boolean) => {
    // Проверка на наличие изменений
    const checkStore = add ? mergeWithTemplate(storeUser) : storeUser
    if (!isChanges(G, checkStore, G.group, exit)) return null;
    
    // Валидация и отправка данных (или вывод об ошибке)
    validAndSendSubmitData(G, exit, validateData, G.group, setErrors, updateRefUser, true, type === UserCardType.ADD, addRefUser);
  };

  React.useEffect(() => {
    if (G.confirm) handleSubmit(false, true); // Если пользователь нажал Сохранить при Confirm
  }, [G.confirm]);
  

  return (
    <Box component="form" noValidate sx={{ display: `flex`, flexDirection: `column` }}>

      <Content group={G} type={type} />
      
      <Actions
        disabledDelete = {add}
        refBookId      = {`users`}
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
