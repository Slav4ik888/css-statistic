import * as React from 'react';
import { cloneObj } from '../../../../utils/objects';
import { UseGroup} from './types';
export { UseGroup };
  
  

export function useGroup<O>(
  initOpen?     : boolean,
  initGroup?    : O,
  initIsChange? : boolean
): UseGroup<O>  {
   
  const
    [group, _setGroup] = React.useState(cloneObj(initGroup || {}) as O),
    setGroup = (group: O, noChanges?: boolean) => {
      _setGroup((prev) => cloneObj(group));
      if (!noChanges) _setChanges(true);
    },
    updateGroup = (group: O, noChanges?: boolean) => {
      _setGroup((prev) => cloneObj(group));
      if (!noChanges) _setChanges(true);
    },

    getGroup = () => {
      return new Promise((resolve, reject) => {
        let obj = {} as O;

        _setGroup(prev => {
          obj = cloneObj(prev);
          resolve(obj);
          return prev
        });
      })
    };

  const
    [open, _setOpen] = React.useState(initOpen || false),
    setOpen = () => _setOpen(true),
    setClose = () => {
      _setGroup({} as O); // Очищаем старое состояние
      _setOpen(false);
      _setChanges(false);
    },

    [changes, _setChanges] = React.useState(initIsChange || false),
    setChanges = (v: boolean) => _setChanges((prev) => v),

    [confirm, _setConfirm] = React.useState(false),
    setConfirm  = (v: boolean) => _setConfirm((prev) => v);


  return {
    open,     setOpen, setClose,
    group,    setGroup, updateGroup, getGroup,
    changes,  setChanges,
    confirm,  setConfirm
  }
};
