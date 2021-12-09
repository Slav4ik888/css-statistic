
export interface UseBoolean {
  bool       : boolean;
  setTrue()  : void;
  setFalse() : void;
};

export interface UseOpen {
  open                    : boolean;
  close                   : boolean;
  setOpen()               : void;
  setClose()              : void;
  
  isChange                : boolean;
  setIsChange(v: boolean) : void;
  
  confirm                 : boolean;
  setConfirm(v: boolean)  : void;
};

export interface UseValue {
  value               : string;
  setValue(v: string) : void;
  clearValue()        : void;
};

export interface UseNumber {
  value               : number;
  setValue(v: number) : void;
  clearValue()        : void;
};

export interface UseObject<T> {
  obj             : T;
  setObject(v: T) : void;
};

export interface UseArray<A> {
  array                            : Array<A>;
  setArray(v: Array<A>)            : void;
  updateArray(v: A, field: string) : void;
  clearArray()                     : void;
};

export interface UseModule<O> {
  open                    : boolean;
  close                   : boolean;
  setOpen()               : void;
  setClose()              : void;
  
  obj                     : O;
  setObject(v: O)         : void;

  isChange                : boolean;
  setIsChange(v: boolean) : void;
  
  confirm                 : boolean;
  setConfirm(v: boolean)  : void;
}