export function predictAge(
  age1: number,
  age2: number,
  age3: number,
  age4: number,
  age5: number,
  age6: number,
  age7: number,
  age8: number
): number {
  // create an array out of all arguments
  // multiply each argument by itself
  // reduce the results to a sum
  // take the square root of the sum
  // divide it by 2
  // return the result rounded down

  const sumOfSquares = [...arguments].reduce(
    (acc, curr) => acc + curr * curr,
    0
  );

  return Math.floor(Math.sqrt(sumOfSquares) / 2);
}
