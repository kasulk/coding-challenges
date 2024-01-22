export function shorterReverseLonger(a: string, b: string): string {
  let longer = a;
  let shorter = b;

  if (b.length > a.length) {
    longer = b;
    shorter = a;
  }

  const longerReversed = [...longer].reverse().join("");

  return shorter + longerReversed + shorter;
}
