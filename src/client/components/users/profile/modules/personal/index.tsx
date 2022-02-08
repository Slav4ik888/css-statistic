import * as React from 'react';
// Components
import CardBlock from '../../../../containers/card-block';
import Person from '../person';
import Description from '../description';
import Email from '../email';
// Types
import { User, UserCardType } from '../../../../../../types';
import { UseGroup } from '../../../../../utils/hooks/types';


type Props = {
  group : UseGroup<User>;
  type  : UserCardType;
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
