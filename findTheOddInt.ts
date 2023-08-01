export const findOdd = (xs: number[]): number => {
  // happy coding!
  // save the first number in variable
  // if the next number is not the same
  // check the length of the output array
  // if its odd, return output[0]
  // if even, wipe the array

  if (xs.length === 1) return xs[0];

  xs.sort();

  //note: too slow...

  let output: number[] = [xs[0]];
  console.log(xs[xs.length - 1]);

  for (let i = 0; i < xs.length - 1; i++) {
    //     console.log('=======================')
    //     console.log('output before:', output)
    //     console.log(xs[i], xs[i+1])

    if (xs[i] !== xs[i + 1] && output.length % 2 !== 0) {
      return output[0];
    } else if (output.length % 2 === 0) {
      output = [];
    }
    output.push(xs[i]);
    //     console.log('output after:', output)
  }

  return xs[xs.length - 1];
};
