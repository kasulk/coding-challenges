export function isUpperCase(str: string): boolean {
  // check if the input does not contain any lower case characters (regex)

  return !/[a-z]/g.test(str);
}
