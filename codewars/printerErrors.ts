export function printerError(controlString: string): string {
  // remove all letters from a-m from the input string and store the rest in a variable
  // return a string with
  /// the aboves outputs length as numerator and
  /// the input string length as denominator

  const errors = controlString.replace(/[a-m]/g, "");

  return `${errors.length}/${controlString.length}`;
}
