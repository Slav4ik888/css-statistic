
export const mergeWithScheme = (obj, scheme) => {
  if (!obj || !scheme) return {};

  let newObj = {};

  for (let key in scheme) {
    if (Object.prototype.hasOwnProperty.call(scheme, key)) {

      if (typeof scheme[key] === `object`) {
        const scheme2 = scheme[key];

        for (let key2 in scheme2) {
          if (Object.prototype.hasOwnProperty.call(scheme2, key2)) {

            if (typeof scheme2[key2] === `object`) {
              const scheme3 = scheme2[key2];

              for (let key3 in scheme3) {
                if (Object.prototype.hasOwnProperty.call(scheme3, key3)) {
                  if (typeof scheme3[key3] === `object`) {
                    const scheme4 = scheme3[key3];

                    for (let key4 in scheme4) {
                      if (Object.prototype.hasOwnProperty.call(scheme4, key4)) {
                        if (typeof obj[key]?.[key2]?.[key3]?.[key4] !== `undefined`) {

                          if (typeof newObj[key]             === `undefined`) newObj[key]             = {};
                          if (typeof newObj[key][key2]       === `undefined`) newObj[key][key2]       = {};
                          if (typeof newObj[key][key2][key3] === `undefined`) newObj[key][key2][key3] = {};

                          newObj[key][key2][key3][key4] = obj[key][key2][key3][key4];
                        }
                      }
                    }
                  }
                  else {
                    if (typeof obj[key]?.[key2]?.[key3] !== `undefined`) {

                      if (typeof newObj[key]       === `undefined`) newObj[key]       = {};
                      if (typeof newObj[key][key2] === `undefined`) newObj[key][key2] = {};
                      newObj[key][key2][key3] = obj[key][key2][key3];
                    }
                  }
                }
              }
            }
            else {
              if (typeof obj[key]?.[key2] !== `undefined`) {

                if (typeof newObj[key] === `undefined`) newObj[key] = {};
                newObj[key][key2] = obj[key][key2];
              }
            }
          }
        }
      }
      else {
        if (typeof obj?.[key] !== `undefined`) newObj[key] = obj?.[key];
      }
    }
  }

  newObj.lastChange = new Date().toISOString();

  return newObj;
};
