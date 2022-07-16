import * as React from 'react';
// Components
import { TextField } from '../../../../containers/elements';
// Types
import { User, CardType } from '../../../../../../types';
import { UseGroup } from '../../../../../utils/hooks';



type Props = {
  group   : UseGroup<User>;
  type    : CardType;
};

const EmailCnt: React.FC<Props> = ({ group: G, type }) => {

  const disabled = type === CardType.EDIT;

  return (
    <>
      <TextField
        grid         = {{ sm: 6 }}
        label        = "Email"   
        group        = {G}
        disabled     = {disabled}
        scheme       = "email"
        errorField   = "email"
        fullWidth
        defaultValue = {G.group.email}
      />

      <TextField
        grid         = {{ sm: 6 }}
        label        = "Id"   
        group        = {G}
        disabled
        fullWidth
        scheme       = "id"
        defaultValue = {G.group.id}
      />
    </>
  )
};

export default EmailCnt;
