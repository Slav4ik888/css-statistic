import { cloneObj } from '../objects/objects.js';


/**
 * Возвращает массив созданный из списка (псевдомассива), с добавлением id в виде key от списка
 * @param {Object} list 
 * @returns {Array}
 */
export function getArrayFromList<O extends object>(list: O): Array<{ id: keyof O }>;


/**
 * Возвращает список уникальных id из array, пример userId из tasks || companyId из usersProfiles
 * @param {Array} arr 
 * @param {String} field 
 * 
 * @return {Array}
 */
export function getItemsIdListFromArr<B, A extends Array<B>>(arr: A, field: string): Set<B>
