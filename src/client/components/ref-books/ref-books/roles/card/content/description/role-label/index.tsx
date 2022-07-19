import * as React from 'react';
// Redux
import { connect } from 'react-redux';
import { State } from '../../../../../../../../redux/redux-types';
import { getErrors } from '../../../../../../../../redux/selectors/ui';
// Components
import { TextfieldItem } from '../../../../../../../containers/cards/items';
// Types
import { UseGroup } from '../../../../../../../../utils/hooks';
import { Errors, Role } from '../../../../../../../../../types';



type Props = {
  group    : UseGroup<Role>;
  errors?  : Errors;
};


const RoleLabel: React.FC<Props> = ({ group: R, errors }) => {

  return (
    <TextfieldItem
      grid       = {{ sm: 12 }}
      label      = 'Название роли'   
      group      = {R}
      scheme     = 'role'
      errors     = {errors}
      errorField = 'role'
    />
  );
};

const mapStateToProps = (state: State) => ({
  errors: getErrors(state)
});

export default connect(mapStateToProps)(RoleLabel);
