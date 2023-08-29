export const digitize = (n: number): number[] => {
  // convert input number into string
  // then into array of numbers
  // then reverse it
  // then return it

  return n.toString().split("").map(Number).reverse();
};
