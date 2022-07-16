

export interface UseGroup<O> {
  group                   : O;
  setGroup(   v: O, noChanges?: boolean) : void;
  updateGroup(v: O, noChanges?: boolean) : void;
  getGroup()              : Promise<unknown>;
  
  open                    : boolean;
  setOpen()               : void;
  setClose()              : void;
  
  changes                 : boolean;
  setChanges(v: boolean)  : void;
  
  confirm                 : boolean;
  setConfirm(v: boolean)  : void;
};


export interface TupleGroup {
  scheme: string,
  value: any
};

export type TuplesGroup = Array<TupleGroup>;
