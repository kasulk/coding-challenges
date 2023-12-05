export function extraPerfect(n: number): number[] {
  // create an array with numbers from 1 to n
  // loop through all numbers
  // only return those, which binary numbers have a 1 as first and last digit

  return Array(n)
    .fill("x")
    .map((_, i) => i + 1)
    .filter((num) => {
      const numBinary = num.toString(2);
      if (numBinary.startsWith("1") && numBinary.endsWith("1")) return num;
    });
}
