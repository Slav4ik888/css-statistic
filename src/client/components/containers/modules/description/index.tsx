import * as React from 'react';
// Components
import TextArea from '../../elements/textarea';
// Types
import { UseGroup, UseOpen } from '../../../../utils/hooks/types';


type Props = {
  group     : UseGroup<any>;
  hookOpen? : UseOpen;
};

const DescriptionCnt: React.FC<Props> = ({ group, hookOpen }) => {
  const callBack = () => hookOpen?.setIsChange(true);

  return (
    <>
      <TextArea
        grid        = {{ sm: 12 }}
        label       = "Примечание"
        placeholder = "Примечание"
        group       = {group} scheme="description"
        errorField  = "description"
        onCallback  = {callBack}
      />
    </>
  )
};

export default DescriptionCnt;