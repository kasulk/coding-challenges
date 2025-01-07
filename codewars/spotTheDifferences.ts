export function spot(str1: string, str2: string): number[] {
  return [...str1].reduce(
    (acc, _, i) => (str1[i] === str2[i] ? acc : [...acc, i]),
    [] as number[]
  );
}
