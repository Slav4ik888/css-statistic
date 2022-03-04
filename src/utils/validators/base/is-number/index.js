
export const isNumber = (data) => {
  if (typeof data === `number`) return true;
  else return false
};

export const isNotNumber = (data) => !isNumber(data);
