import * as React from 'react';
import { useAnchor } from '../../../../utils/hooks';
// Components
import NavBtn from '../nav-btn';
import BxMenu from '../../menus/bx';



export const BxMenuBtn: React.FC = () => {
  const
    A = useAnchor<HTMLElement>(false, null),
    handlerMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      A.setOpen();
      A.setAnchor(event.currentTarget);
    };
  
  
  return (
    <>
      <NavBtn
        label     = 'Битрикс24'
        toolLabel = 'Открыть список по работе с "Битрикс24"'
        onClick   = {handlerMenuOpen}
      />
      <BxMenu hookAnchor={A} />
    </>
  )
};
