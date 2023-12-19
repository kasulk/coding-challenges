export function compose(str1: string, str2: string): string {
  const revStrs2 = str2.split("\n").reverse();

  return str1
    .split("\n")
    .map(
      (str, i) =>
        str.slice(0, i + 1) + revStrs2[i].slice(0, revStrs2.length - i)
    )
    .join("\n");
}
