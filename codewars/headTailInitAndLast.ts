export const head = (arr: number[]): number => {
  return arr[0];
};

export const tail = (arr: number[]): number[] => {
  return arr.slice(1);
};

export const init = (arr: number[]): number[] => {
  return arr.slice(0, -1);
};

export const last = (arr: number[]): number => {
  return arr[arr.length - 1];
};
