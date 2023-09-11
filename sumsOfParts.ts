export function partsSums(ls: number[]): number[] {
  // sum up all numbers and store the sum in a variable
  // create an output array and assign the sum total as its initial value
  // loop through the list, for each element,
  // subtract it from the total and push the result to the output array
  // return the output array

  if (ls.length === 0) return [0];

  let total = ls.reduce((acc, curr) => acc + curr, 0);

  const outputSums: number[] = [total];

  for (let i = 0; i < ls.length; i++) {
    outputSums.push((total -= ls[i]));
  }

  return outputSums;
}
