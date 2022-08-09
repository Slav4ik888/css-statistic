import * as React from 'react';
// Components
import UserCnt from './user-cnt';
import DialogInfo from '../../dialogs/dialog-info';
// Functions
import { UseGroup } from '../../../utils/hooks';
// Types, Styles
import { CardType, User } from '../../../../types';



type Props = {
  type  : CardType;
  group : UseGroup<User>;
};


const DialogUserCnt: React.FC<Props> = ({ type, group: U }) => {
  
  const title = type === CardType.ADD ? "Новый пользователь" : "Пользователь";

  return (
    <DialogInfo hookOpen={U} title={title}>
      <UserCnt
        type  = {type}
        group = {U}
      />
    </DialogInfo>
  )
};

export default DialogUserCnt;
