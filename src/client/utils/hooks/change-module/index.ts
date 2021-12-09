import getScheme from "../change-hook-object/get-scheme";
import { UseModule } from "../types";


const setValue = (obj: object, value: any, scheme: string) => {
  const { field1, field2, field3 } = getScheme(scheme as string);

  if (field3)      obj[field1][field2][field3] = value;
  else if (field2) obj[field1][field2] = value;
  else if (field1) obj[field1] = value;
};


export default function changeModule<O, T>(
  module: UseModule<O>,
  value: T | Array<any>,
  scheme: string | Array<string>
) {
  const newObj = Object.assign({}, module.obj);
  
  if (!Array.isArray(value)) setValue(newObj, value, scheme as string)
  else {
    // Либо оба массива, либо оба значения
    if (!Array.isArray(scheme)) return console.log(`ОШИБКА - scheme должен быть массивом`);
    // Длина массивов должна быть одинаковая
    if (value.length !== scheme.length) return console.log(`ОШИБКА - длина массива scheme и value должна быть одинаковой`);
    
    value.forEach((v, i) => {
      setValue(newObj, v, scheme[i])
    });
  }

  module.setObject(newObj);
}
