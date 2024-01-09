export function doubleton(num: number): number {
  let i = num + 1;

  while (new Set(i.toString()).size !== 2) {
    i++;
  }

  return i;
}
