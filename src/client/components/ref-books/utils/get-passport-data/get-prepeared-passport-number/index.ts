import getDigit from "../../../../../../utils/helpers/get-digits/get-digits";


export const getPrepearedPassportNumber = (number: string) => {

  return getDigit(number).slice(0, 6);
};
