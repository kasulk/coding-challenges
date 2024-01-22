export function squarePi(n: number): number {
  // get the first n digits of pi
  // for each digit,
  // square it and add it to a sum
  // get the sqrt of the result,
  // return it round it up

  const piDigits =
    "31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += Number(piDigits[i]) ** 2;
  }

  return Math.ceil(Math.sqrt(sum));
}
