
const checkChanges = (prev, setObj, newObj) => {
  for (let fKey in prev) {
    if (Object.prototype.hasOwnProperty.call(prev, fKey)) {
      const fValue = prev[fKey];         // 'managerId' : {}
      const fSetValue = setObj[fKey];

      if (fSetValue === undefined) continue; // В этом элементе не было изменений

      if (typeof fValue === `object`) {        // 'managerId' : {} = true
        for (let sKey in fValue) {
          if (Object.prototype.hasOwnProperty.call(fValue, sKey)) {
            const sValue = fValue[sKey];    // label: 'Менеджер по заявке'
            const sSetValue = fSetValue[sKey];

            if (sSetValue === undefined) continue;

            if (typeof sValue === `object`) {  // style: {} = true

              for (let tKey in sValue) {
                if (Object.prototype.hasOwnProperty.call(sValue, tKey)) {
                  const tValue = sValue[tKey];
                  const tSetValue = sSetValue[tKey];

                  if (tSetValue === undefined) continue;

                  if (tValue !== tSetValue) {
                    if ( newObj[fKey] === undefined) newObj[fKey] = {}
                    if ( newObj[fKey][sKey] === undefined) newObj[fKey][sKey] = {}
                    newObj[fKey][sKey][tKey] = tSetValue
                  }
                }
              }
            }
            else {
              if (sValue !== sSetValue) {
                if (newObj?.[fKey] === undefined) newObj[fKey] = {};
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
};


const checkNewFields = (prev, setObj, newObj) => {
  for (let fKey in setObj) {
    if (Object.prototype.hasOwnProperty.call(setObj, fKey)) {
      const fValue = setObj[fKey];

      if (typeof fValue === `object`) {
        for (let sKey in fValue) {
          const sValue = fValue[sKey];

          if (typeof sValue === `object`) {
            for (let tKey in sValue) {
              const tValue = sValue[tKey];

              if (tValue !== prev?.[fKey]?.[sKey]?.[tKey]) {
                if (newObj[fKey] === undefined) newObj[fKey] = {}; 
                if (newObj[fKey][sKey] === undefined) newObj[fKey][sKey] = {}
                newObj[fKey][sKey][tKey] = tValue;
              }
            }
          }
          else {
            if (sValue !== prev?.[fKey]?.[sKey]) {
              if (newObj[fKey] === undefined) newObj[fKey] = {}; 
              newObj[fKey][sKey] = sValue;
            }
          }
        }
      }
      else {
        if (fValue !== prev[fKey]) newObj[fKey] = fValue
      }
    }
  }
};



export function getChanges(prevObj, setObj) {
  if (!prevObj && !setObj || !setObj) return {};
  if (!prevObj) return setObj;

  let newObj = {};

  checkChanges(prevObj, setObj, newObj);
  checkNewFields(prevObj, setObj, newObj);

  return newObj
}
