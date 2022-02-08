import * as React from 'react';
// Components
import { TextField } from '../../../../containers/elements';
// Types
import { User } from '../../../../../../types';
import { UseGroup } from '../../../../../utils/hooks/types';


type Props = {
  group   : UseGroup<User>;
};


const PersonCnt: React.FC<Props> = ({ group: G }) => {

  return (
    <>
      <TextField
        grid={{ sm: 4 }}
        label="Фамилия"
        group={G}
        scheme="person.secondName"
        errorField="secondName"
        fullWidth
        defaultValue={G.group.person.secondName}
      />

      <TextField
        grid={{ sm: 4 }}
        label="Имя"
        group={G}
        scheme="person.firstName"
        errorField="firstName"
        fullWidth
        defaultValue={G.group.person.firstName}
      />

      <TextField
        grid={{ sm: 4 }}
        label="Отчество"
        group={G}
        scheme="person.middleName"
        errorField="middleName"
        fullWidth
        defaultValue={G.group.person.middleName}
      />
    </>
  )
};

export default PersonCnt;
