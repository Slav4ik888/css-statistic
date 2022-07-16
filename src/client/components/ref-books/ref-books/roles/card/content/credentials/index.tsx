import * as React from 'react';
// Components
import CardBlock from '../../../../../../containers/cards/card-block';
import CredentialsHeader from './header';
import CredentialsList from './list';
// Types
import { UseGroup } from '../../../../../../../utils/hooks';
import { Role } from '../../../../../../../../types';



type Props = {
  group : UseGroup<Role>;
};


const CredentialsBox: React.FC<Props> = ({ group: G }) => {

  return (
    <CardBlock label="Полномочия роли">
      <CredentialsHeader />
      <CredentialsList group={G} />
    </CardBlock>
  );
};

export default CredentialsBox;
