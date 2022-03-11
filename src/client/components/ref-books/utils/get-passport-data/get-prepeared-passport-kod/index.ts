import getDigit from "../../../../../../utils/helpers/get-digits/get-digits";


export const getPrepearedPassportKod = (kod: string) => {
  let clearedKod = getDigit(kod);
  let newKod = ``;
  
  if (clearedKod.length) {

    for (let i = 0; i < clearedKod.length; i++) {
      // Добавляем пробелы
      if (i === 3) newKod += "-";
      newKod += clearedKod[i];
    }
  }
  
  return newKod.slice(0, 7);
};
