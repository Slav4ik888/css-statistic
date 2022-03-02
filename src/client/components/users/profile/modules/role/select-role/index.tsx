import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getRoles } from '../../../../../../redux/selectors/data';
import { State } from '../../../../../../redux/redux-types';
// Components
import Text from '../../../../../containers/select-text';
import SelectRole from './select';
// Functions
import { getRoleNameById } from '../../../../../../utils/helpers';
import { useOpen } from '../../../../../../utils/hooks';
// Types & Styles
import { UseGroup } from '../../../../../../utils/hooks/types';
import { Roles, User } from '../../../../../../../types';
import { useTheme } from '@emotion/react';


const useStyles = (theme: any) => ({
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
  console.log('U: ', U.group);
  const
    sx     = useStyles(useTheme()),
    select = useOpen(),
    role   = React.useMemo(() => getRoleNameById(roles, U.group.role?.roleId) || `Не выбрана`, [U.group.role?.roleId]);

  
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
  roles  : getRoles(state)
});

export default connect(mapStateToProps)(SelectRoleCnt);
