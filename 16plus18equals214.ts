export function add(num1: number, num2: number): number {
  // convert each input number in its array
  // reverse the arrays
  // loop through the arrays (length of larger/longer number times)
  // for each digit
  // add its corresponding digit of the other input number
  // if a digit doesn't exist i.e. is undefined, add a 0 instead
  // add each digitSum to the beginning of an result string
  // after the loop, return the result string converted to a number

  let result = "";

  const reversedNumArr1 = num1.toString().split("").reverse();
  const reversedNumArr2 = num2.toString().split("").reverse();

  const longerNumLength = Math.max(
    reversedNumArr1.length,
    reversedNumArr2.length
  );

  for (let i = 0; i < longerNumLength; i++) {
    const digitSum =
      Number(reversedNumArr1[i] ? reversedNumArr1[i] : 0) +
      Number(reversedNumArr2[i] ? reversedNumArr2[i] : 0);

    result = digitSum + result;
  }

  return Number(result);
}
