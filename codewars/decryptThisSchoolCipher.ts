export function decrypt(str: string): string {
  const matches = [...str.matchAll(/'(.*?)'|\d|\s/g)];

  return matches
    .map((a) => {
      if (a[1] === " ") return a[1];
      if (a[1] === undefined) return a[0]; // number
      return String.fromCharCode(Number(a[1]));
    })
    .reverse()
    .join("");
}
