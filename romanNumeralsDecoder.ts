export function solution(romanNum: string): number {
  // create a map object
  // create an array with converted digits as decimal numbers
  // loop through this numbers
  // if current number is smaller than the next
  /// store it in a variable
  // else subtract what is currently in the stack from the current number and
  // add the (calculated) digit to a sum variable
  // return the sum

  const romanNumbersMap: { [romanNumber: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let stack = 0;
  let sum = 0;
  const decimalNums: number[] = [];

  // turn the roman digits into decimal numbers
  for (let letter of romanNum) {
    decimalNums.push(romanNumbersMap[letter]);
  }

  for (let i = 0; i < decimalNums.length; i++) {
    if (decimalNums[i] < decimalNums[i + 1]) {
      stack += decimalNums[i];
      continue;
    }

    sum += decimalNums[i] - stack;
    stack = 0;
  }

  return sum;
}
