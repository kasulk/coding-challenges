export function solution(roman: string): number {
  // create a map object
  // loop through elements of input string
  // if the current roman number is smaller than the next
  // subtract it from the next
  ///? by storing it to a variable
  // concatenate the decoded number to a result string
  // convert the resulted numbers string into a number and return it

  const romanNumbersMap: { [romanNumber: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let output = 0;
  const decimalNums: number[] = [];
  let stack = 0;

  // turn the roman digits into decimal numbers
  for (let letter of roman) {
    decimalNums.push(romanNumbersMap[letter]);
  }

  for (let i = 0; i < decimalNums.length; i++) {
    if (decimalNums[i] < decimalNums[i + i]) {
      stack += decimalNums[i];
      continue;
    }

    output += decimalNums[i] - stack;
    stack = 0;
  }

  return output;
}
