export const any = (arr, fn = Boolean) => arr.some(fn);

//example of usage any([0, 1, 2, 0], x => x >= 2); --> true
