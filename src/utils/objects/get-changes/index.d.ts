/**
 * Возвращает объект с теми полями, которые были изменены по отношению к первоначальному объекту
 * ! Возможная глубина вложения, только 1 вложенный объект
 * @param prevObj - первоначальный объект
 * @param newObj  - новый объект
 */
export default function getChanges(prevObj: object, setObj: object): object;