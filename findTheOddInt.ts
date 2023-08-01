export const findOdd = (xs: number[]): number => {
  // happy coding!
  // loop through input array
  // save the first number
  // check if the second number is the same
  // if so, delete it
  // go on until the end of the array and return the number

  /// if number is included in the array only once, return it

  let output = xs[0];

  for (let i = 1; i < xs.length; i++) {
    if (xs[i] !== output) {
      output = xs[i];
    }
  }

  return output;
};
