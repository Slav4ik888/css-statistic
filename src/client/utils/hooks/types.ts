
export interface UseBase {
  open                        : boolean;
  setOpen(changes?: boolean)  : void;
  setClose(changes?: boolean) : void;
  
  changes                     : boolean;
  setChanges(v: boolean)      : void;
  
  confirm                     : boolean;
  setConfirm(v: boolean)      : void;
};


export interface UseBoolean {
  bool       : boolean;
  setTrue()  : void;
  setFalse() : void;
};


export interface UseArray<A> {
  array                            : Array<A>;
  setArray(v: Array<A>)            : void;
  updateArray(v: A, field: string) : void;
  clearArray()                     : void;
};
