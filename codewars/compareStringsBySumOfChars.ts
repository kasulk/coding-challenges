export function compare(str1: string | null, str2: string | null): boolean {
  const sums = [0, 0];

  if (str1 && !/[^a-z]/i.test(str1))
    sums[0] = str1
      ?.toUpperCase()
      .split("")
      .reduce((charCodeSum, letter) => charCodeSum + letter.charCodeAt(0), 0);

  if (str2 && !/[^a-z]/i.test(str2))
    sums[1] = str2
      ?.toUpperCase()
      .split("")
      .reduce((charCodeSum, letter) => charCodeSum + letter.charCodeAt(0), 0);

  return sums[0] === sums[1];
}
