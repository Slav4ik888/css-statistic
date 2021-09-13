/**
 * ПОЛУЧАЕМ ДАННЫЕ С ГУГЛ ТАБЛИЦЫ
 * @param {string} url адрес на гугл таблицу
 * 
 * @return {array} arr  
 */

export const getFromGoogle = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(res => res.DATA777);
};
