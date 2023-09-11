export function partsSums(ls: number[]): number[] {
  // loop through the list, for each number,
  // pop the last off the input list
  // add it to a sum variable and push the sum to the output array

  let sum = 0;

  const outputSums: number[] = [sum];

  if (ls.length === 0) return [0];

  while (ls.length > 0) {
    sum += ls.pop() ?? 0;
    outputSums.unshift(sum);
  }

  return outputSums;
}
