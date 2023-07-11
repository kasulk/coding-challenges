export const digitalRoot = (n: number): number => {
  // turn input number into string
  // while output is >9 // length>1
  // loop through all digits, add them and store the sum in a variable
  // stringify the sum

  let numString = n.toString();
  let sum = 0;

  while (numString.length > 1) {
    sum = 0;
    for (let digit of numString) {
      sum += Number(digit);
    }
    numString = sum.toString();
  }

  return sum;
};
