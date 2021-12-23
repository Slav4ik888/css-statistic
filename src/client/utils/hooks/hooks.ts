import * as React from 'react';
import { updateArrWithItemByField } from '../../../utils/arrays/update-arr-with-item-by-field';
import { cloneObj } from '../../../utils/objects/objects-base';
import { UseOpen, UseValue, UseArray, UseNumber, UseObject, UseBoolean, UseModule} from './types';


export function useBoolean(initValue: boolean): UseBoolean  {
  const [bool, _setBool] = React.useState(initValue);

  const setTrue = () => _setBool(true);
  const setFalse = () => _setBool(false);

  return {
    bool, setTrue, setFalse
  }
};

export function useOpen(initOpen?: boolean, initIsChange?: boolean): UseOpen  {
  const [open, _setOpen] = React.useState(initOpen || false);
  const close = !open;

  const setOpen = () => _setOpen(true);
  const setClose = () => _setOpen(false);

  const [isChange, _setIsChange] = React.useState(initIsChange);
  const setIsChange = (v: boolean) => _setIsChange(v);

  const [confirm, _setConfirm] = React.useState(false);
  const setConfirm = (v: boolean) => _setConfirm(v);

  return {
    open, close, setOpen, setClose,
    isChange, setIsChange,
    confirm, setConfirm
  }
};


export function useValue(initValue?: string): UseValue {
  const [value, _setValue] = React.useState(initValue || ``);

  const setValue= (v: string) => _setValue((prev) => v);
  const clearValue = () => _setValue(``);

  return {
    value, setValue, clearValue
  }
};

export function useNumber(initValue: number): UseNumber {
  const [value, _setValue] = React.useState(initValue);

  const setValue= (v: number) => _setValue((prev) => v);
  const clearValue = () => _setValue(0);

  return {
    value, setValue, clearValue
  }
};

export function useObject<T> (initObj: T): UseObject<T> {
  const [obj, _setObject] = React.useState(cloneObj(initObj) as T);

  const setObject= (obj: T) => _setObject((prev) => obj);

  return {
    obj, setObject // , clearObject
  }
};



export function useArray<T>(initArray: Array<T>): UseArray<T> {
  const [array, _setArray] = React.useState<Array<T>>(initArray);

  const setArray = (v: Array<T>) => _setArray(v);
  const updateArray = (v: T, field: string) => {
    _setArray((prev) => updateArrWithItemByField(array, field, v));
  };
  const clearArray = () => _setArray([]);

  return {
    array, setArray, updateArray, clearArray
  }
};


export function useModule<O>(
  initOpen?     : boolean,
  initObj?      : O,
  initIsChange? : boolean
): UseModule<O>  {
  const [open, _setOpen] = React.useState(initOpen || false);
  const close = !open;

  const setOpen = () => _setOpen(true);
  const setClose = () => {
    _setObject({} as O); // Очищаем старое состояние
    _setOpen(false);
    _setIsChange(false);
  }

  const [obj, _setObject] = React.useState(cloneObj(initObj || {}) as O);
  const setObject = (obj: O) => _setObject((prev) => cloneObj(obj));
  
  const [isChange, _setIsChange] = React.useState(initIsChange || false);
  const setIsChange = (v: boolean) => _setIsChange(v);

  const [confirm, _setConfirm] = React.useState(false);
  const setConfirm = (v: boolean) => _setConfirm(v);

  return {
    open, close, setOpen, setClose,
    obj, setObject,
    isChange, setIsChange,
    confirm, setConfirm
  }
};
