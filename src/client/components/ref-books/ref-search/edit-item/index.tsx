import * as React from 'react';
// Components
import DialogInfo from '../../../../components/dialogs/dialog-info';
import CardSwitch from '../../card-switch';
// Functions
import { getCardTitle } from '../../utils';
// Types
import { CardType, RefbookId } from '../../../../../types';
import { UseGroup } from '../../../../utils/hooks';



type Props = {
  group     : UseGroup<any>;
  refbookId : RefbookId;
  checkedId : string;
};

/**
 * Edit item when click in RefSearch
 */
const EditItem: React.FC<Props> = ({ group: G, refbookId, checkedId }) => {

  return (
    <DialogInfo
      hookOpen = {G}
      title    = {getCardTitle(CardType.EDIT, refbookId)}
      children = {<CardSwitch
        group      = {G}
        refbookId  = {refbookId}
        checkedId  = {checkedId}
      />}
    />
  );
};

export default EditItem;