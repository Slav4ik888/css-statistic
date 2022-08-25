import * as React from 'react';
import { useGroup } from '../../../../utils/hooks';
// Components
import NavBtn from '../nav-btn';
import BxMenu from '../../menus/bx';



export const BxMenuBtn: React.FC = () => {
  const
    A = useGroup<Element>(false, null),
    handlerMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      A.setOpen();
      A.setGroup(event.currentTarget);
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
