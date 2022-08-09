import * as React from 'react';
// Credentials
import { noCred, CredName as Cr, whoseCred } from '../../../../../../utils/credentials';
// Redux
import { State } from '../../../../../redux/redux-types';
import { getLoadingUser, getUser } from '../../../../../redux/selectors/user';
import { updateUser } from '../../../../../redux/actions/user';
import { setErrors, showWarning } from '../../../../../redux/actions/ui';
import { updateAnyUser } from '../../../../../redux/actions/ref-books/users';
import { connect } from 'react-redux';
// MUI Stuff
import { Box } from '@mui/material';
// Components
import Personal from '../../../../ref-books/ref-books/users/card/content/modules/personal';
import Role from './modules/role';
import Actions from '../../../../containers/actions';
// Functions
import { empty } from '../../../../../../utils/objects';
import validateAndSubmit from '../../../../../../utils/validators/validate-and-submit';
import { DisplayError } from '../../../../../../templates/errors/display-errors';
// Types
import { User, CardType, Validator } from '../../../../../../types';
import { FlexDirection } from '../../../../../utils/styles';
import { UseGroup } from '../../../../../utils/hooks';



const useStyles = () => ({
  root: {
    display       : `flex`,
    flexDirection : FlexDirection.COLUMN
  },
});


type Props = {
  loading?     : boolean;
  type         : CardType;
  user?        : User;
  creds?       : object;
  group        : UseGroup<User>; // Selected User
  setErrors?   : () => void;
  showWarning? : (m: string) => void;
  updateUser?  : (u: User) => void;
};


const UserProfile: React.FC<Props> = ({ loading, type, group: G, user, creds, setErrors, showWarning, updateUser }) => {
  const sx = useStyles();

  if (empty(G.group)) return null;
  
  const handleSubmit = (e?: any, exit?: boolean) => {
    // Проверка на наличие изменений
    // if (!isChanges(G, storeFlight, G.group, exit)) return null;

    // Проверка полномочий
    const whose = whoseCred(G.group.createdAt, user); // В чей объект пытаются получить доступ
    console.log('whose: ', whose);
    if (noCred(Cr.USER_PROFILE_C, user, creds, whose)) return showWarning(DisplayError.NO_CREDENTIALS);

    validateAndSubmit(
      Validator.USER_UPDATE,
      G.group,
      G.group.id === user.id ? updateUser : updateAnyUser,
      setErrors,
      G,
      exit
    );
  };


  return (
    <Box sx={sx.root}>
      <Personal group={G} type={type} />
      <Role group={G} />

      <Actions
        loading  = {loading}
        hookOpen = {G}
        onClose  = {G.setClose}
        onSubmit = {handleSubmit}
      />
    </Box>
  );
};

const mapStateToProps = (state: State) => ({
  loading : getLoadingUser(state),
  user    : getUser(state)
});

const mapActionsToProps = {
  updateUser, updateAnyUser, setErrors, showWarning
};

export default connect(mapStateToProps, mapActionsToProps)(UserProfile);