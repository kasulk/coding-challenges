export function averages(numbers: number[] | null): number[] {
  // loopt through input array
  // start at index 1
  // add the previous number to the current and divide the result by 2
  // return the result

  if (!numbers) return [];

  const output: number[] = [];

  for (let i = 1; i < numbers.length; i++) {
    const average = (numbers[i] + numbers[i - 1]) / 2;
    output.push(average);
  }

  return output;
}
