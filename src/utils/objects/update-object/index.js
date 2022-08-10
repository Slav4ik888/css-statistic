import { cloneObj, isObject } from '../objects-base/index.js';


export const updateObject = (lastObj, updatedFields) => {
  if (!lastObj && !updatedFields) return {};
  if (lastObj && !updatedFields) return lastObj;
  if (!lastObj && updatedFields) return updatedFields;

  let newObj = cloneObj(lastObj);

  for (let fKey in updatedFields) {
    if (Object.prototype.hasOwnProperty.call(updatedFields, fKey)) {
      const fValue = updatedFields[fKey];
      if (isObject(fValue)) {

        for (let sKey in fValue) {
          if (Object.prototype.hasOwnProperty.call(fValue, sKey)) {
            const sValue = fValue[sKey];

            if (isObject(sValue)) {
              for (let tKey in sValue) {
                if (Object.prototype.hasOwnProperty.call(sValue, tKey)) {
                  
                  if (newObj[fKey] === undefined) newObj[fKey] = {};
                  if (newObj[fKey][sKey] === undefined) newObj[fKey][sKey] = {};
                  newObj[fKey][sKey][tKey] = sValue[tKey];
                }
              }
            }
            else {
              if (newObj[fKey] === undefined) newObj[fKey] = {};
              newObj[fKey][sKey] = sValue;
            }
          }
        }
      }
      else newObj[fKey] = fValue;
    }
  };

  return newObj;
};
