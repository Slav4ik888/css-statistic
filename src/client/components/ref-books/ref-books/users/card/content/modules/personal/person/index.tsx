import * as React from 'react';
// Components
import { TextField } from '../../../../../../../../containers/elements';
// Types
import { Errors, User } from '../../../../../../../../../../types';
import { UseGroup } from '../../../../../../../../../utils/hooks';
import { TextfieldItem } from '../../../../../../../../containers/cards/items';
import { State } from '../../../../../../../../../redux/redux-types';
import { getErrors } from '../../../../../../../../../redux/selectors/ui';
import { connect } from 'react-redux';



type Props = {
  group   : UseGroup<User>;
  errors? : Errors;
};


const PersonCnt: React.FC<Props> = ({ group: G, errors }) => {

  return (
    <>
      <TextfieldItem
        grid         = {{ sm: 4 }}
        label        = 'Фамилия'   
        group        = {G}
        scheme       = 'person.secondName'
        errors       = {errors}
        errorField   = 'secondName'
      />

      <TextfieldItem
        grid         = {{ sm: 4 }}
        label        = 'Имя'
        group        = {G}
        scheme       = 'person.firstName'
        errors       = {errors}
        errorField   = 'firstName'
      />

      <TextfieldItem
        grid         = {{ sm: 4 }}
        label        = 'Отчество'
        group        = {G}
        scheme       = 'person.middleName'
        errors       = {errors}
        errorField   = 'middleName'
      />
    </>
  )
}

const mapStateToProps = (state: State) => ({
  errors: getErrors(state)
});

export default connect(mapStateToProps)(PersonCnt);
