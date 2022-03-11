import getDigit from "../../../../../../utils/helpers/get-digits/get-digits";


export const getPrepearedPassportSeries = (series: string) => {
  let clearedSeries = getDigit(series);
  let newSeries = ``;
  
  if (clearedSeries.length) {

    for (let i = 0; i < clearedSeries.length; i++) {
      // Добавляем пробелы
      if (i === 2) newSeries += " ";
      newSeries += clearedSeries[i];
    }
  }
  return newSeries.slice(0, 5);
};