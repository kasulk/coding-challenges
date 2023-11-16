export function specialNumber(num: number) {
  // loop through the digits of the input number
  // if at some point a digit is greater than 5, return 'NOT!!'
  // else return 'Special!!'

  const digits = num.toString().split("").map(Number);

  for (let digit of digits) {
    if (digit > 5) return "NOT!!";
  }

  return "Special!!";
}
