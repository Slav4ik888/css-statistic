
export const isInvalidYear = (year) => year &&
  (year < 1980 || year > new Date().getFullYear());