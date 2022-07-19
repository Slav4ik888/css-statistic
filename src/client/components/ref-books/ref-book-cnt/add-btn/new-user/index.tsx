import * as React from 'react';
// Components
import CardUser from '../../../ref-books/users/card';
import DialogInfo from '../../../../dialogs/dialog-info';
// Functions
import { UseGroup } from '../../../../../utils/hooks';
// Types & Styles
import { User, CardType } from '../../../../../../types';



type Props = {
  group: UseGroup<User>;
};

/**
 * Добавление в Справочник нового элемента
 */
const NewUserCard: React.FC<Props> = ({ group: NewU }) => (
  <DialogInfo
    title    = 'Добавление нового пользователя'
    hookOpen = {NewU}
    onClose  = {NewU.setClose}
  >
    <CardUser
      type  = {CardType.ADD}
      group = {NewU}
    />
  </DialogInfo>
);

export default NewUserCard;
