import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getRoles } from '../../../../../../redux/selectors/ref-books';
import { State } from '../../../../../../redux/redux-types';
// Components
import Text from '../../../../../containers/select-text';
import SelectRole from './select';
// Functions
import { getRoleNameById } from '../../../../../../utils/helpers';
import { useValue, UseGroup } from '../../../../../../utils/hooks';
// Types & Styles
import { Roles, User } from '../../../../../../../types';
import { useTheme } from '@emotion/react';
import { Themes } from '../../../../../../utils/styles';



const useStyles = (theme: Themes) => ({
  text: {
    width           : `100%`,
    backgroundColor : theme.profile.textfield.background
  }
});


type Props = {
  roles? : Roles;
  group  : UseGroup<User>;
};


const SelectRoleCnt: React.FC<Props> = ({ roles, group: U }) => {
  const
    sx     = useStyles(useTheme() as Themes),
    select = useValue(),
    role   = React.useMemo(() => getRoleNameById(roles, U.group.role?.roleId) || `Не выбрана`, [U.group.role?.roleId]);

  console.log('U: ', U.group);
  
  return (
    <>
      <Text
        grid      = {{ sm: 7 }}
        label     = "Тип роли"
        toolTitle = "Тип роли"
        select    = {select}
        children  = {role}
        sx        = {sx.text}
      />

      <SelectRole
        select = {select}
        group  = {U}
      />
    </>
  );
};


const mapStateToProps = (state: State) => ({
  roles: getRoles(state)
});

export default connect(mapStateToProps)(SelectRoleCnt);
