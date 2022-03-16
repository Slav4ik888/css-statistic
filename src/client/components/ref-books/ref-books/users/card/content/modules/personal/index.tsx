import * as React from 'react';
// Components
import CardBlock from '../../../../../../../containers/card-block';
import Person from '../../../../../../modules/person';
import { Description } from '../../../../../../../containers/modules/index';
import Email from '../email';
// Types
import { User, CardType } from '../../../../../../../../../types';
import { UseGroup } from '../../../../../../../../utils/hooks/types';


type Props = {
  group : UseGroup<User>;
  type  : CardType;
};

const EmailCnt: React.FC<Props> = ({ group, type }) => {

  return (
    <CardBlock label="Персональные данные">
      <Person      group={group} />
      <Description group={group} />
      <Email       group={group} type={type} />
    </CardBlock>
  )
};


export default EmailCnt;