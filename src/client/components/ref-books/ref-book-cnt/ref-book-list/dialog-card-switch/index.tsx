import * as React from 'react';
// Components
import DialogInfo from '../../../../dialogs/dialog-info';
import CardSwitch from '../../../card-switch';
// Functions
import { getCardTitle } from '../../../utils/get-card-title';
// Types
import { UseGroup } from '../../../../../utils/hooks';
import { CardType, RefbookId } from '../../../../../../types';



type Props = {
  group     : UseGroup<any>;
  checkedId : string;
  refbookId : RefbookId;  // Id Справочника
  onClose   : () => void;
};

const DialogCardSwitch: React.FC<Props> = ({ group, checkedId, refbookId, onClose }) => {

  return (
    <DialogInfo
      title    = {getCardTitle(CardType.EDIT, refbookId)}
      hookOpen = {group}
      onClose  = {onClose}
    >
      <CardSwitch
        refbookId = {refbookId}
        checkedId = {checkedId}
        group     = {group}
      />
    </DialogInfo>
  );
};

export default DialogCardSwitch;
