import * as React from 'react';
import { UseValue } from './types';
export { UseValue };

/**
 * 
 */
export function useValue<I>(initValue?: I, initOpen?: boolean, initIsChange?: boolean): UseValue<I>  {
  const
    [value, _setValue] = React.useState(initValue !== undefined ? initValue : null),
    setValue = (value: I, open?: boolean) => {
      _setValue(prev => value);
      if (typeof open !== `undefined`) _setOpen(open);
    },
    clearValue = () => _setValue((typeof initValue === `string` ? `` : 0) as unknown as I),

    [open, _setOpen] = React.useState(initOpen || false),
    setOpen = (c?: boolean) => {
      _setOpen(true);
      if (typeof c !== `undefined`) setChanges(c);
    },
    setClose = (c?: boolean) => {
      _setOpen(false);
      if (typeof c !== `undefined`) setChanges(c);
    },

    [changes, _setChange] = React.useState(initIsChange),
    setChanges = (v: boolean) => _setChange(v),

    [confirm, _setConfirm] = React.useState(false),
    setConfirm = (v: boolean) => _setConfirm(v);

  
  return {
    value,      setValue,     clearValue,
    open,    setOpen,     setClose,
    changes,  setChanges,
    confirm, setConfirm
  }
};
