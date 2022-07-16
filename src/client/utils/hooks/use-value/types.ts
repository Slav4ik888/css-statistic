
export interface UseValue<V> {
  value                          : V;
  setValue(v: V, open?: boolean) : void;
  clearValue()                   : void;
  
  open                           : boolean;
  setOpen(changes?: boolean)     : void;
  setClose(changes?: boolean)    : void;
  
  changes                        : boolean;
  setChanges(v: boolean)         : void;
  
  confirm                        : boolean;
  setConfirm(v: boolean)         : void;
};
