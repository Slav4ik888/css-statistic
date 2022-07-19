import * as React from 'react';
// Redux
import { connect } from 'react-redux';
import { getErrors } from '../../../../../../../../../redux/selectors/ui';
import { State } from '../../../../../../../../../redux/redux-types';
// Components
import { TextfieldItem } from '../../../../../../../../containers/cards/items';
import { TextField } from '../../../../../../../../containers/elements';
// Types
import { User, CardType, Errors } from '../../../../../../../../../../types';
import { UseGroup } from '../../../../../../../../../utils/hooks';



type Props = {
  group   : UseGroup<User>;
  type    : CardType;
  errors? : Errors;
};


const EmailCnt: React.FC<Props> = ({ group: U, type, errors }) => {
  const
    disabled = type === CardType.EDIT;

  return (
    <>
      <TextfieldItem
        grid         = {{ sm: 6 }}
        label        = 'Email'   
        group        = {U}
        disabled     = {disabled}
        scheme       = 'email'
        errorField   = 'email'
        errors       = {errors}
      />

      <TextField
        grid         = {{ sm: 6 }}
        label        = 'Id'   
        disabled
        fullWidth
        defaultValue = {U.group.id}
      />
    </>
  )
};

const mapStateToProps = (state: State) => ({
  errors: getErrors(state)
});

export default connect(mapStateToProps)(EmailCnt);
