import getDigit from "../../../../../utils/helpers/get-digits";


export const getPrepearedPhone = (phone: string) => {
  let clearedPhone = getDigit(phone);
  let newPhone = ``;
  if (clearedPhone.length) {
    newPhone += "+7";

    for (let i = 0; i < clearedPhone.length; i++) {
      if (i < 11) {
        // Добавляем пробелы
        if (i === 1) newPhone += " (";
        if (i === 4) newPhone += ") ";
        if (i === 7 || i === 9) newPhone += "-";

        if (i !== 0) newPhone += clearedPhone[i];
      }
    }
  }
  
  return newPhone;
};