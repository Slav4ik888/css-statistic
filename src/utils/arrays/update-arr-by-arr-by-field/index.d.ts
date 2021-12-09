/**
 * Update lastArr by newArr by field, все не обновлённые объекты остаются без изменений
 * @param {Array} lastArr 
 * @param {string} field 
 * @param {Array} newArr 
 */
export default function updateArrByArrByField<T>(lastArr: T, field: string, newArr: T): T;