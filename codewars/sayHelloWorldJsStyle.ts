export function say(str1: string): Function {
  return function (str2: string): string {
    return `${str1} ${str2}`;
  };
}
