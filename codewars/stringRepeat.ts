export function repeatStr(n: number, s: string): string {
  let output = "";

  for (let i = 0; i < n; i++) {
    output += s;
  }

  return output;
}
