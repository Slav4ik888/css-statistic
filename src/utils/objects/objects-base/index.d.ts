
export function isObject(obj: object): boolean;

export function extend<A, B>(a: A, b: B): {};

export function cloneObj<O>(obj: O): O;

export function objectLength<O>(obj: O): number;

export function noop(): void;

/**
 * True если пустой объект
 */
export function empty<O>(obj: O): boolean;
export function noEmpty<O>(obj: O): boolean;

/**
 * True if all "obj" fields is empty value
 * @param {object} obj - simple obj
 */
export function isEmptyFields<O>(obj: O): boolean;

/**
 * False if one of any fields in "obj" with value
 * @param {object} obj - simple obj
 */
export function isNoEmptyFields<O>(obj: O): boolean;


export function arrFromObj<T>(obj: T): Array<T>;

export function arrFromObjByObj<T>(obj: T, field: string): Array<{ [field: string]: T }>;