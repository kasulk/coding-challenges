export function alphanumeric(string: string): boolean {
  // check from start to end
  // if input string contains only characters that
  // are not [not-alphanumeric and a underscore]
  // and contains 1 or more of these characters

  return /^[^\W_]+$/.test(string);
}
