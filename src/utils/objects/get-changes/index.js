/**
 * Возвращает объект с теми полями, которые были изменены по отношению к первоначальному объекту
 * ! Возможная глубина вложения, только 1 вложенный объект
 * @param prevObj - первоначальный объект
 * @param newObj  - новый объект
 */
export default function getChanges(prevObj, setObj) {
  let newObj = {};

  for (let fKey in prevObj) {
    if (Object.prototype.hasOwnProperty.call(prevObj, fKey)) {
      const fValue = prevObj[fKey];         // 'managerId' : {}
      const fSetValue = setObj[fKey];

      if (typeof fSetValue === `undefined`) continue; // В этом элементе не было изменений

      if (typeof fValue === `object`) {        // 'managerId' : {} = true
        for (let sKey in fValue) {
          if (Object.prototype.hasOwnProperty.call(fValue, sKey)) {
            const sValue = fValue[sKey];    // label: 'Менеджер по заявке'
            const sSetValue = fSetValue[sKey];

            if (typeof sSetValue === `undefined`) continue;

            if (typeof sValue === `object`) {  // style: {} = true

              for (let tKey in sValue) {
                if (Object.prototype.hasOwnProperty.call(sValue, tKey)) {
                  const tValue = sValue[tKey];
                  const tSetValue = sSetValue[tKey];

                  if (typeof tSetValue === `undefined`) continue;

                  if (tValue !== tSetValue) {
                    if (typeof newObj[fKey] === `undefined`) newObj[fKey] = {}
                    if (typeof newObj[fKey][sKey] === `undefined`) newObj[fKey][sKey] = {}
                    newObj[fKey][sKey][tKey] = tSetValue
                  }
                }
              }
            }
            else {
              if (sValue !== sSetValue) {
                if (typeof newObj?.[fKey] === `undefined`) newObj[fKey] = {};
                newObj[fKey][sKey] = sSetValue;
              }
            }
          }
        }
      }
      else {
        if (fValue !== fSetValue) newObj[fKey] = fSetValue;
      }
    }
  }

  return newObj
}