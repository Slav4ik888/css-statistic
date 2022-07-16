import * as React from 'react';
// Components
import { TextArea } from '../../../../containers/elements';
// Types
import { UseGroup, UseValue } from '../../../../../utils/hooks';



type Props = {
  group     : UseGroup<any>;
  hookOpen? : UseValue<any>;
};

const DescriptionCnt: React.FC<Props> = ({ group, hookOpen }) => {
  const
    callBack = () => hookOpen?.setChanges(true);

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
