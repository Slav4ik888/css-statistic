
/**
 * Удаляет все буквы, кроме цифр
 * @param {string} str 
 * @returns 
 */
export default function getDigit(str) {
  return str.replace(/\D/g, ``);
}