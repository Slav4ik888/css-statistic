import * as React from 'react';
// Components
import DialogInfo from '../../../dialogs/dialog-info';
import CardSwitch from '../../card-switch';
// Functions
import { getCardTitle } from '../../utils';
import { UseGroup } from '../../../../utils/hooks';
// Types
import { CardType, RefbookId } from '../../../../../types';



type Props = {
  refbookId : RefbookId;
  group     : UseGroup<any>;
};


const DialogRefbookCard: React.FC<Props> = ({ group, refbookId }) => {
  
  return (
    <DialogInfo
      title    = {getCardTitle(CardType.ADD, refbookId)}
      hookOpen = {group}
      onClose  = {group.setClose}
      children = {<CardSwitch group={group} refbookId={refbookId} />}
    />
  );
};

export default DialogRefbookCard;
