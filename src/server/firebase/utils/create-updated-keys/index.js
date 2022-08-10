
/**
 * Create key name by keys
 * @param {array} keys 
 * @return {string}
 */
const createKeyName = (keys) => keys.join(`.`);


/**
 * Create all keys with values from object 
 * & SAVE them to "result"
 * @param {string} firstKey - start object key 'person' from { person: { name: 'Slava', second: 'Korzan' }}
 * @param {object} obj      - { name: 'Slava', second: 'Korzan' }
 * @param {object} result   - finish result object
 */
const createKeysWithValues = (firstKey, obj, result) => {
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === `object`) {
        const startKeyName = createKeyName([firstKey, key]);
        createKeysWithValues(startKeyName, obj[key], result);
      }
      else {
        const newKey = createKeyName([firstKey, key]);
        result[newKey] = obj[key]
      }
    }
  }
};


export const createUpdatedKeys = (updated) => {
  if (!updated || typeof updated !== `object`) return {};

  let result = {};

  for (let key in updated) {
    if (Object.prototype.hasOwnProperty.call(updated, key)) {

      if (typeof updated[key] === `object`) createKeysWithValues(key, updated[key], result);
      else result[key] = updated[key];
    }
  };

  return result;
};
