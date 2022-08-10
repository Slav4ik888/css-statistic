/**
 * Возвращает объект с теми полями, которые были изменены по отношению к первоначальному объекту
 * ! Возможная глубина вложения, только 1 вложенный объект
 * @param prevObj - первоначальный объект
 * @param setObj  - новый объект
 */
export function getChanges<T extends object>(prevObj: T, setObj: Partial<T>): Partial<T>;
