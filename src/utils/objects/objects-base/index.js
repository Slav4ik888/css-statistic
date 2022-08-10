
export const isObject = (obj) => {
  if (typeof obj !== `object`) return false;
  if (Array.isArray(obj)) return false;

  return true;
};


export const extend = (a, b) => {
  return Object.assign({}, a, b);
};


// Возвращает клон объекта
export const cloneObj = (obj) => {
  const newObj = JSON.stringify(obj);
  return JSON.parse(newObj);
};


export const noop = () => {
  // do nothing for test
};


// Возвращает длину объекта (кол-во элементов)
export const objectLength = (obj) => {
  let result = 0;
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) result++;
  }

  return result;
};

/**
 * True если пустой объект
 */
export const empty = (obj) => !objectLength(obj);
export const noEmpty = (obj) => !empty(obj);


/**
 * True if all "obj" fields is empty value
 * @param {object} obj - simple obj
 */
export const isEmptyFields = (obj) => {
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (obj[key]) return false
    }
  }
  return true;
};
export const isNoEmptyFields = (obj) => !isEmptyFields(obj);


export const arrFromObj = (obj) => {
  let arr = [];
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      arr.push(obj[key]);
    }
  }
  return arr;
};


/**
 * Возвращает массив объектов с полем [field] из obj
 * [{status: `Выполняется`}, {status: `На проверке`} ...]
 * @param {Object} obj - role || typeListSelect || TaskStatusConst
 * @param {String} field `status`, `currentStatus
 * @return {Array} массив из объектов 
 */
export const arrFromObjByObj = (obj, field) => {
  let arr = [];
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      arr.push({ [field]: obj[key] });
    }
  }
  return arr;
};

