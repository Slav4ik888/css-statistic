import * as React from 'react';
// Components
import TextField from '../../../../../../../containers/elements/textfield';
// Types
import { User, CardType } from '../../../../../../../../../types';
import { UseGroup } from '../../../../../../../../utils/hooks';



type Props = {
  group   : UseGroup<User>;
  type    : CardType;
};


const EmailCnt: React.FC<Props> = ({ group, type }) => {
  const
    disabled = type === CardType.EDIT;

  return (
    <>
      <TextField
        grid         = {{ sm: 6 }}
        label        = "Email"   
        group        = {group}
        disabled     = {disabled}
        scheme       = "email"
        errorField   = "email"
        fullWidth
        defaultValue = {group.group.email}
      />

      <TextField
        grid         = {{ sm: 6 }}
        label        = "Id"   
        group        = {group}
        disabled
        scheme       = "id"
        fullWidth
        defaultValue = {group.group.id}
      />
    </>
  )
};

export default EmailCnt;
