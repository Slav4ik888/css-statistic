import * as React from 'react';
// Components
import CardBlock from '../../../../../containers/card/block';
import { TextField, TextArea } from '../../../../../containers/elements';
// Types
import { UseGroup } from '../../../../../../utils/hooks/types';
import { Role } from '../../../../../../../types';


type Props = {
  group    : UseGroup<Role>;
};


const CardDescription: React.FC<Props> = ({ group }) => {

  return (
    <CardBlock label="Описание роли">
      <TextField
        grid         = {{ sm: 12 }}
        label        = "Название роли"   
        group        = {group}
        scheme       = "role"
        fullWidth
        defaultValue = {group.group.role}
      />

      <TextArea
        grid        = {{ sm: 12 }}
        label       = "Примечание"
        placeholder = "Примечание"
        group       = {group} scheme="description"
        errorField  = "description"
      />
    </CardBlock>
  );
};

export default CardDescription;