export function numbersWithDigitInside(num: number, d: number): number[] {
  // create a list with all numbers from 1 to x as strings
  // for each number
  // if it contains d,
  // add it to a new array
  // return the output array with the count, sum and product of the this array

  const numsWithDigit: number[] = Array(num)
    .fill("x")
    .map((_, i) => i + 1) // nums list
    .filter((num) => String(num).includes(String(d)));

  if (!numsWithDigit.length) return [0, 0, 0];

  return [
    numsWithDigit.length,
    numsWithDigit.reduce((sum, curr) => sum + Number(curr), 0),
    numsWithDigit.reduce((prod, curr) => prod * Number(curr), 1),
  ];
}
