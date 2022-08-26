import * as React from 'react';
// Components
import MenuContainerLogics from '../menu-wrapper';
import BxMenuItem from './bx-menu-item';
import DialogInfo from '../../../dialogs/dialog-info';
import BxContainer from '../../../bx/bx-cnt';
// Functions
import { getBxLabel } from './utils';
import { UseGroup, useValue } from '../../../../utils/hooks';
// Types
import { BX_HOOKS_LIST_ITEMS } from './bx-hooks-list';



type Props = {
  hookAnchor : UseGroup<Element>;
};

/** Menu of Bx list item for Navbar */
const BxMenuLogics: React.FC<Props> = ({ hookAnchor: A }) => {
  const
    Bx          = useValue<string>(),
    handlerOpen  = (e: any) => Bx.setValue(e.target.closest(`li`).id, true),
    handlerClose = () => Bx.setValue(null, false);

  return (
    <>
      <MenuContainerLogics hookAnchor={A} menuId='bx-menu'>
        {
          BX_HOOKS_LIST_ITEMS.map((item, i) => <BxMenuItem
            key    = {item.id + i}
            item   = {item}
            onOpen = {handlerOpen}
          />)
        }
      </MenuContainerLogics>

      <DialogInfo
        hookOpen = {Bx}
        onClose  = {handlerClose}
        title    = {getBxLabel(Bx.value)}
        children = {<BxContainer bxId={Bx.value} />}
      />
    </>
  )
};

export default BxMenuLogics;
