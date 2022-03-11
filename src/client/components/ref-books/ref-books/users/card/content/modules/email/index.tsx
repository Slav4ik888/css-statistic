import * as React from 'react';
// Components
import TextField from '../../../../../../../containers/elements/textfield';
// Types
import { User, UserCardType } from '../../../../../../../../../types';
import { UseGroup } from '../../../../../../../../utils/hooks/types';



type Props = {
  group   : UseGroup<User>;
  type    : UserCardType;
};

const EmailCnt: React.FC<Props> = ({ group, type }) => {

  const disabled = type === UserCardType.EDIT;

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