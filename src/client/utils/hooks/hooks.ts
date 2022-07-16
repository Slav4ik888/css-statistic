import * as React from 'react';
import { updateArrWithItemByField } from '../../../utils/arrays/update-arr-with-item-by-field';
import { UseArray, UseBoolean } from './types';



export function useBoolean(initValue?: boolean): UseBoolean  {
  const [bool, _setBool] = React.useState(initValue || false);

  const setTrue = () => _setBool(true);
  const setFalse = () => _setBool(false);

  return {
    bool, setTrue, setFalse
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
