export function validISBN10(isbn: string): boolean {
  // check the input string, if it doesn't contain of
  // 10 digits, or 9 digits and an 'X', return false
  // loop through the digits, for each digit,
  /// multiply it by its index in the string
  /// add it to a sum
  /// (if it is an 'X' add 10 * 10 to the sum)
  // after the loop, if it is divisible by 11, return true, else false

  if (!/^[0-9]{10}$|^[0-9]{9}X$/.test(isbn)) return false;

  const isbnSum = [...isbn].reduce(
    (sum, digit, i) =>
      digit === "X" ? sum + 100 : sum + Number(digit) * (i + 1),
    0
  );

  return isbnSum % 11 === 0;
}
