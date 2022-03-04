
export const isEmail = (email) => {
  if (!email) return false;
  
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegEx)) {
    return true;
  } else {
    return false;
  }
};


export const isEmpty = (str) => {
  if (typeof str !== `string`) return false;

  if (!str || str?.trim() === ``) {
    return true;
  } else {
    return false;
  }
};

export const isNoEmpty = (str) => !isEmpty(str);

export const isBool    = (bool) => typeof bool === `boolean`;
export const isNoBool  = (bool) => !isBool(bool);

export const isString = (str) => typeof str === `string`;
export const isNoString = (str) => !isString(str);

export const getPhone  = (str) => str.replace(/\D/g, ``);

export const isValidPhone = (str) => {
  if (isEmpty(str)) return true;

  const reg = getPhone(str);
  return reg.length === 11;
};


// Возвращает true если строка допустимого значения  // test+++
export const isValidMaxL = (maxLength, str) => {
  if (str === undefined) return false;
  if (isEmpty(str)) return true;
  if (typeof str !== `string`)  return false;
  if (str?.length <= maxLength) return true;

  return false // console.log(`Нет совпадений по условиям...`);
};

export const isValidMaxL15 = (str) => isValidMaxL(15, str);
export const isValidMaxL30 = (str) => isValidMaxL(30, str);
export const isValidMaxL100 = (str) => isValidMaxL(100, str);
export const isValidMaxL300 = (str) => isValidMaxL(300, str);
export const isValidMaxL1000 = (str) => isValidMaxL(1000, str);

export const isNoValidMaxL15 = (str) => !isValidMaxL(15, str);
export const isNoValidMaxL30 = (str) => !isValidMaxL(30, str);
export const isNoValidMaxL100 = (str) => !isValidMaxL(100, str);
export const isNoValidMaxL300 = (str) => !isValidMaxL(300, str);
export const isNoValidMaxL1000 = (str) => !isValidMaxL(1000, str);


/**
 * Возвращает true если строка с цифрами установленного значения length
 * @param {number} length
 * @param {string} str стока из цифр
 * @returns 
 */
export const isValidNumberL = (length, strNum) => {
  if (strNum === undefined) return false;
  if (typeof strNum !== `string`) return false;
  if (
    strNum.replace(/\D/, ``).length !== strNum.length ||
    strNum.replace(/\D/, ``).length !== length
  ) return false;

  return true;
};

export const isValidNumberL7 = (str) => isValidNumberL(7, str);
export const isValidNumberL20 = (str) => isValidNumberL(20, str);

export const isNoValidNumberL7 = (str) => !isValidNumberL(7, str);
export const isNoValidNumberL20 = (str) => !isValidNumberL(20, str);



// Является ли строка ИНН
export const isITN = (ITN) => {
  if (!ITN) return false;
  if (ITN.length !== 10 && ITN.length !== 12) return false;
  if (ITN.replace(/\D/, ``) !== ITN) return false;
  return true;
};
export const isNoITN = (ITN) => !isITN(ITN);



// Проверяем email для восстановления пароля
export const validEmailData = (email) => {
  let errors = {};
  // Проверка email
  if (isEmpty(email)) errors.email = `Поле email не должно быть пустым`;
  if (!isEmail(email)) errors.email = `Введён не корректный email`;
  if (!isValidMaxL30(email)) errors.email = `Email не должен превышать 30 символов`;

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
};

// Проверяем данные resUser
export const validationResUserData = (resUser) => { // Test +++
  let errors = {};

  if (isEmpty(resUser.userId)) errors.userId = `Поле userId не должно быть пустым`;
  if (isEmpty(resUser.companyId)) errors.companyId = `Поле companyId не должно быть пустым`;

  if (resUser.userId?.length !== 28) errors.userId = `Поле userId должен содержать 28 символов`;
  if (resUser.companyId?.length !== 20) errors.companyId = `Поле companyId должен содержать 20 символов`;

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
};






