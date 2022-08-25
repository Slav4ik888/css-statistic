import * as React from 'react';
// Components
import MenuContainerLogics from '../menu-wrapper';
import DialogInfo from '../../../dialogs/dialog-info';
// Functions
import { getRefbookLabel } from '../../../ref-books/utils/get-refbook-label';
import { UseGroup, useValue } from '../../../../utils/hooks';
// Types
import { BX_HOOKS_LIST_ITEMS } from './bx-hooks-list';



type Props = {
  hookAnchor : UseGroup<Element>;
};

/** Menu of Bx list item for Navbar */
const BxMenuLogics: React.FC<Props> = ({ hookAnchor: A }) => {
  const
    hookOpen = useValue(),
    refbook  = useValue<RefbookId>();

  
  const handleOpen = (e: any) => {
    const target = e.target.closest(`li`);
    refbook.setValue(target.id);
    hookOpen.setOpen();
  };

  const handleClose = () => {
    refbook.setValue(null);
    hookOpen.setClose();
  };

  
  return (
    <>
      <MenuContainerLogics hookAnchor={A} menuId='bx-menu'>
        {
          BX_HOOKS_LIST_ITEMS.map((item, i) => <BxMenuItem key={item.id + i} item={item} onOpen={handleOpen} />)
        }
      </MenuContainerLogics>

      <DialogInfo
        hookOpen = {hookOpen}
        onClose  = {handleClose}
        title    = {getRefbookLabel(refbook.value)}
        children = {<BxContainer refbookId={refbook.value} />}
      />
    </>
  )
};

export default BxMenuLogics;
