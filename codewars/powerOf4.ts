export function powerOf4(n: any): boolean {
  if (typeof n !== "number") return false;

  let num = n;

  while (num > 1) {
    num /= 4;
  }

  return num === 1;
}
