export function narcissistic(value: number): boolean {
  // turn input into array
  // loop through elements
  // for every element take it to the power of the arrays length
  // check if the sum equals the the original number

  const digits: string[] = value.toString().split(""); //.map(Number);

  return (
    value ===
    digits
      .map((digit) => Math.pow(Number(digit), digits.length))
      .reduce((a, b) => a + b)
  );
}
