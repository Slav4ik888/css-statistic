

// Является value одним из массива (only simple values - extends string)
export const isOneOfSeveral = (value, arr) => Boolean(arr?.find((item) => item === value));

export const isNoOneOfSeveral = (value, arr) => Boolean(!isOneOfSeveral(value, arr));