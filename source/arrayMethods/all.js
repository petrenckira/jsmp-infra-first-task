export const all = (arr, fn = Boolean) => arr.every(fn);

//example of usage all([4, 2, 3], x => x > 1); --> true
