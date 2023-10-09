export const dashatize = (num: number): string => {
  // if the input number is NaN, return the string 'NaN', else
  // convert the input number into its absolute value
  // loop through its digits
  /// if the digit is even, return it, else
  ///- create a variable to store the altered digit, add to the variable
  ///-- a dash before it, unless its the first digit or the digit before it was odd
  ///-- the actual digit
  ///-- a dash after it, unless its the last
  ///- return the value of the altered digit
  // after the loop, convert the resulting array into a string and return it

  return isNaN(num)
    ? "NaN"
    : Math.abs(num)
        .toString()
        .split("")
        .map(Number)
        .map((digit, i, arr) => {
          if (digit % 2 === 0) return digit;

          let alteredDigit = "";
          if (i !== 0) {
            if (arr[i - 1] % 2 === 0) alteredDigit += "-";
          }
          alteredDigit += digit;
          if (i !== arr.length - 1) alteredDigit += "-";

          return alteredDigit;
        })
        .join("");
};
