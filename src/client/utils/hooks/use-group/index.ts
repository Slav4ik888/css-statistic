import * as React from 'react';
import { cloneObj } from '../../../../utils/objects/objects-base';
import { UseGroup} from '../types';


export function useGroup<O>(
  initOpen?     : boolean,
  initGroup?    : O,
  initIsChange? : boolean
): UseGroup<O>  {
  const [open, _setOpen] = React.useState(initOpen || false);
  const close = !open;

  const setOpen  = () => _setOpen(true);
  const setClose = () => {
    _setGroup({} as O); // Очищаем старое состояние
    _setOpen(false);
    _setIsChange(false);
  };

  
  const [group, _setGroup] = React.useState(cloneObj(initGroup || {}) as O);
  const setGroup   = (group: O)     => {
    _setGroup((prev) => cloneObj(group));
  };
  const updateGroup = (group: O)     => {
    _setGroup((prev) => cloneObj(group));
    _setIsChange(true);
  };


  const [isChange, _setIsChange] = React.useState(initIsChange || false);
  const setIsChange = (v: boolean) => _setIsChange((prev) => v);


  const [confirm, _setConfirm] = React.useState(false);
  const setConfirm  = (v: boolean) => _setConfirm((prev) => v);


  return {
    open, close, setOpen, setClose,
    group,       setGroup, updateGroup,
    isChange,    setIsChange,
    confirm,     setConfirm
  }
};
