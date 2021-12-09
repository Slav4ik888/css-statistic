/**
 * Сортируем по arr по полю fieldName
 * @param {array} arr 
 * @param {string} fieldName 
 * @param {boolean} decrease // если нужно на убывание
 * @return {array} - result
 */
export const sortingArr = (arr, fieldName, decrease) => { // test +++ without decrease
  if (!arr?.length || arr.length === 1) return arr;
  
  let result = [...arr];
  // result = result.concat(arr);
  const L = decrease ? 1 : -1;
  const G = decrease ? -1 : 1;
  
  return result.sort((a, b) => {
    if (a[fieldName] < b[fieldName]) {
      return L;
    }
    if (a[fieldName] > b[fieldName]) {
      return G;
    }
    return 0;
  }); 
};