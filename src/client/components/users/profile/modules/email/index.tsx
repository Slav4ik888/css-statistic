import * as React from 'react';
// Components
import { TextField } from '../../../../containers/elements';
// Types
import { User, UserCardType } from '../../../../../../types';
import { UseGroup } from '../../../../../utils/hooks/types';



type Props = {
  group   : UseGroup<User>;
  type    : UserCardType;
};

const EmailCnt: React.FC<Props> = ({ group: G, type }) => {

  const disabled = type === UserCardType.EDIT;

  return (
    <>
      <TextField
        grid         = {{ sm: 6 }}
        label        = "Email"   
        group        = {G}
        disabled     = {disabled}
        scheme       = "email"
        errorField   = "email"
        defaultValue = {G.group.email}
      />

      <TextField
        grid         = {{ sm: 6 }}
        label        = "Id"   
        group        = {G}
        disabled
        scheme       = "id"
        defaultValue = {G.group.id}
      />
    </>
  )
};

export default EmailCnt;
