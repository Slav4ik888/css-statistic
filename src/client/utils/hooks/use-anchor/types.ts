

export interface UseAnchor<HTMLElement> {
  anchor                 : HTMLElement;
  setAnchor(v: HTMLElement, noChanges?: boolean) : void;
  
  open                   : boolean;
  setOpen()              : void;
  setClose()             : void;
  
  changes                : boolean;
  setChanges(v: boolean) : void;
  
  confirm                : boolean;
  setConfirm(v: boolean) : void;
};

