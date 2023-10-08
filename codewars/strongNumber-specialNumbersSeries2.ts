export const strongNumber = (num: number): string => {
  // loop through digits of the input number, for every element,
  // iterate through numbers 1 to digit, and multiply them
  // if the sum of the products is equal to the input number,
  // return 'STRONG!!!!', else 'Not Strong !!'

  const factorialValuesOfDigits: number[] = num
    .toString()
    .split("")
    .map((digit) =>
      // calculate factorial value for each digit
      Array(Number(digit))
        .fill("x")
        .map((_, i) => i + 1)
        .reduce((prod, curr) => prod * curr, 1)
    );

  return factorialValuesOfDigits.reduce((sum, curr) => sum + curr) === num
    ? "STRONG!!!!"
    : "Not Strong !!";
};
