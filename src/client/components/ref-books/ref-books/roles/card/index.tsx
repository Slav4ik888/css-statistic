import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { updateRole } from '../../../../../redux/actions/ref-books/roles';
import { getRoleById } from '../../../../../redux/selectors/ref-books/ref-books';
import { getUserId } from '../../../../../redux/selectors/user';
import { setErrors } from '../../../../../redux/actions/ui/ui';
import { State } from '../../../../../redux/redux-types';
// MUI Stuff
import { Box } from '@mui/material';
// Components
import Content from './content';
import Actions from '../../../actions/actions';
// Functions
import isChanges from '../../../../../utils/check-changes-in-submit';
import mergeWithTemplate from './merge-with-template';
import validRoleData from '../../../../../../utils/validators/roles-data/roles-data';
import validAndSendSubmitData from '../../../../../../utils/validators/submit-data';
// Types
import { UseGroup } from '../../../../../utils/hooks/types';
import { Errors, Role } from '../../../../../../types';


type Props = {
  roleId?     : string; // Созданный или выбранный roleId
  storeRole?  : Role;
  group       : UseGroup<Role>; // Чтобы была возможность закрыть карточку при удалении
  errors?     : Errors;
  userId?     : string;
  setErrors?  : (err: Errors) => void;
  updateRole? : (roleData: Role) => void;
}


const CardRole: React.FC<Props> = ({ roleId, storeRole, group: G, userId, setErrors, updateRole }) => {
  if (!storeRole) return null;
  
  React.useEffect(() => setErrors(null), []);
  React.useEffect(() => G.setGroup(mergeWithTemplate(storeRole, userId)), [roleId, storeRole, userId]);
  
  
  const handleSubmit = async (e?: any, exit?: boolean) => {
    // Проверка на наличие изменений
    if (!isChanges(G, storeRole, G.group, exit)) return null;
    // Валидация данных
    validAndSendSubmitData(G, exit, validRoleData, G.group, setErrors, updateRole);
  };
  
  React.useEffect(() => {
    if (G.confirm) handleSubmit(false, true); // Если пользователь нажал Сохранить при Confirm
  }, [G.confirm]);


  return (
    <Box component="form" noValidate sx={{ display: `flex`, flexDirection: `column` }}>
      
      <Content group={G} />

      <Actions
        refBookId = {`roles`}
        id        = {roleId}
        hookOpen  = {G}
        onSubmit  = {handleSubmit}
      />
    </Box>
  );
};

const mapStateToProps = (state: State, props: Props) => ({
  storeRole: getRoleById(state, props),
  userId: getUserId(state)
});

const mapActionsToProps = {
  setErrors, updateRole
};

export default connect(mapStateToProps, mapActionsToProps)(CardRole);
