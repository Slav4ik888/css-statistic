import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { updateRole } from '../../../../../redux/actions/ref-books';
import { setErrors } from '../../../../../redux/actions/ui';
import { getRoleById } from '../../../../../redux/selectors/ref-books';
import { getUserId } from '../../../../../redux/selectors/user';
import { State } from '../../../../../redux/redux-types';
// Components
import CardContainer from '../../../../containers/cards/card-container';
import Content from './content';
import Actions from '../../../actions';
// Functions
import isChanges from '../../../../../utils/check-changes-in-submit';
import mergeWithTemplate from './merge-with-template';
import validateAndSubmit from '../../../../../../utils/validators/validate-and-submit';
// Types
import { UseGroup } from '../../../../../utils/hooks/types';
import { Errors, RefbookId, Role, Validator } from '../../../../../../types';


type Props = {
  roleId?     : string; // Созданный или выбранный roleId
  storeRole?  : Role;
  group       : UseGroup<Role>; // Чтобы была возможность закрыть карточку при удалении
  errors?     : Errors;
  userId?     : string;
  setErrors?  : (err: Errors) => void;
  updateRole? : (roleData: Role) => void;
};


const CardRole: React.FC<Props> = ({ roleId, storeRole, group: G, userId, setErrors, updateRole }) => {
  
  React.useEffect(() => { setErrors(null); }, []);
  React.useEffect(() => { G.setGroup(mergeWithTemplate(storeRole, userId)); }, [roleId, storeRole, userId]);
  React.useEffect(() => { G.confirm && handleSubmit(false, true); }, [G.confirm]); // Если пользователь нажал Сохранить при Confirm
  
  
  const handleSubmit = async (e?: any, exit?: boolean) => {
    if (!isChanges(G, storeRole, G.group, exit)) return null;

    validateAndSubmit(Validator.ROLE_UPDATE, G.group, updateRole, setErrors, G, true);
  };
  

  if (!storeRole) return null;


  return (
    <CardContainer>
      
      <Content group={G} />

      <Actions
        refBookId = {RefbookId.ROLES}
        id        = {roleId}
        hookOpen  = {G}
        onSubmit  = {handleSubmit}
      />
    </CardContainer>
  );
};

const mapStateToProps = (state: State, props: Props) => ({
  storeRole : getRoleById(state, props),
  userId    : getUserId(state)
});

const mapActionsToProps = {
  setErrors, updateRole
};

export default connect(mapStateToProps, mapActionsToProps)(CardRole);
