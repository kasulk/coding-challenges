export function solve(str: string): number {
  const middle = str.length / 2;
  const headPlus1 = str.slice(0, middle + 1);

  for (let i = 1; i < headPlus1.length; i++) {
    const currHead = headPlus1.slice(0, -i);

    if (str.endsWith(currHead)) return currHead.length;
  }

  return 0;
}
