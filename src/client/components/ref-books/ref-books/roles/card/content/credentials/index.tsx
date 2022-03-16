import * as React from 'react';
// Components
import CardBlock from '../../../../../../containers/card-block';
import CredentialsHeader from './header';
import CredentialsList from './list';
// Types
import { UseGroup } from '../../../../../../../utils/hooks/types';
import { Role } from '../../../../../../../../types';


type Props = {
  group : UseGroup<Role>;
};


const CredentialsBox: React.FC<Props> = ({ group }) => {

  return (
    <CardBlock label="Полномочия роли">
      <CredentialsHeader />
      <CredentialsList group={group} />
    </CardBlock>
  );
};


export default CredentialsBox;
