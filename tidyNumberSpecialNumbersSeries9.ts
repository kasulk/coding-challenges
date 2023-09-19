export function tidyNumber(num: number): boolean {
  // convert input number into array of numbers
  // for each element, check if it is > preceding number
  // if not, early return false, else return true

  const digits: number[] = num.toString().split("").map(Number);

  for (let i = 1; i <= digits.length; i++) {
    if (digits[i] < digits[i - 1]) return false;
  }
  return true;
}
