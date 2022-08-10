
/**
 * Возвращает новый объект lastObj с обновлёнными полями из updateItem
 */
export function updateObject<T extends object, O extends Partial<T>>(lastObj: T, updatedFields: O): T;
