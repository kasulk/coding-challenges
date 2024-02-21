export function thirt(num: number): number {
  // store the sequence in an array (sequence length is 6)
  // loop
  // reverse the digits of the current number
  // multiply each digit with the element in the sequence with the index i%6
  // add each product to a sum
  // do it all over again, until the result is the same as at the start of the iteration

  const sequence = [1, 10, 9, 12, 3, 4]; // length: 6
  let currNum = num;
  let currSum = 0;

  while (true) {
    if (currSum) currNum = currSum;

    const revDigits = [...String(currNum)].reverse().map(Number);

    currSum = revDigits.reduce(
      (sum, digit, i) => sum + digit * sequence[i % 6],
      0
    );

    if (currNum === currSum) return currNum;
  }
}
