export const closestMultiple10 = (num: number): number => {
  // divide the input number by 10 and round it
  // multiply the result by 10 and return it

  return Math.round(num / 10) * 10;
};
