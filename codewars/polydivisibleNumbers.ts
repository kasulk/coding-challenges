export function polydivisible(num: number): boolean {
  // loop
  /// divide the input number by the number of its digits
  /// if its not divisible at some point, return false
  /// else remove the last digit and try again
  // after the loop, return true

  const digits = [...num.toString()];

  while (digits.length) {
    if (Number(digits.join("")) % digits.length !== 0) return false;

    digits.pop();
  }

  return true;
}
