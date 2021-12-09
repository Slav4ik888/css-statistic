// Вывод ошибки в консоль
export function showError(text: string, fieldName: string): void;


// Проверка на ошибку
// Вывод ошибки
// Ответ есть ли ошибка - true при наличии
export function checkError(data: any, fieldName: string): Boolean;



/**
 * Сохраняем в LocalStorage
 * 
 * @param {string} storageName 
 * @param {any} data 
 * @returns 
 */
export function setStorageData(storageName: string, data: any): void;



/**
 * Достаём из LocalStorage
 * @param {string} storageName
 * @returns 
 */
export function getStorageData(storageName: string): any;
