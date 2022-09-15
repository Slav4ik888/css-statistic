import * as React from 'react';
import { UseAnchor} from './types';
export { UseAnchor };
  
  

export function useAnchor<HTMLElement>(
  initOpen?     : boolean,
  initAnchor?   : HTMLElement,
  initIsChange? : boolean
): UseAnchor<HTMLElement>  {
   
  const
    [anchor, _setAnchor] = React.useState(initAnchor || null),
    setAnchor = (anchor: HTMLElement, noChanges?: boolean) => {
      _setAnchor(anchor);
      !noChanges && _setChanges(true);
    };

  const
    [open, _setOpen] = React.useState(initOpen || false),
    setOpen = () => _setOpen(true),
    setClose = () => {
      _setAnchor(null); // Очищаем старое состояние
      _setOpen(false);
      _setChanges(false);
    },

    [changes, _setChanges] = React.useState(initIsChange || false),
    setChanges = (v: boolean) => _setChanges((prev) => v),

    [confirm, _setConfirm] = React.useState(false),
    setConfirm  = (v: boolean) => _setConfirm((prev) => v);


  return {
    open,     setOpen, setClose,
    anchor,   setAnchor,
    changes,  setChanges,
    confirm,  setConfirm
  }
};
