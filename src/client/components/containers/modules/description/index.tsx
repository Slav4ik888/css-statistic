import * as React from 'react';
// Components
import TextArea from '../../elements/textarea';
// Types
import { UseGroup, UseBase } from '../../../../utils/hooks';



type Props = {
  group     : UseGroup<any>;
  hookOpen? : UseBase;
};


const DescriptionCnt: React.FC<Props> = ({ group, hookOpen }) => {
  const callBack = () => hookOpen?.setChanges(true);

  return (
    <TextArea
      grid        = {{ sm: 12 }}
      label       = "Примечание"
      placeholder = "Примечание"
      group       = {group} scheme="description"
      errorField  = "description"
      onCallback  = {callBack}
    />
  )
};

export default DescriptionCnt;