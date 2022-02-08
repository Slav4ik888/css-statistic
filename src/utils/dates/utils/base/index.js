export const sec      = (n) => n * 1000;
export const min      = (n) => n * sec(60);
export const hour     = (n) => n * min(60);

export const day      = (n) => n * hour(24);
export const oneDay   = day(1);

export const week     = (n) => n * day(7);

export const month    = (n) => n * day(30);
export const oneMonth = month(1);
