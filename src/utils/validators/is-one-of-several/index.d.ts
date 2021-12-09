/**
 * Является value одним из массива (only simple values - extends string)
 */
export function isOneOfSeveral<T>(value: T, arr: Array<T>): boolean;

/**
 * Не является value одним из массива (only simple values - extends string)
 */
export function isNoOneOfSeveral<T>(value: T, arr: Array<T>): boolean;