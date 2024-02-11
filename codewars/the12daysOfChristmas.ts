export function comparator(a: string, b: string): number {
  let startA = a.slice(0, 2);
  let startB = b.slice(0, 2);

  if (startA.includes("a")) startA = "1";
  if (startB.includes("a")) startB = "1";
  if (startA.includes("On")) startA = "13";
  if (startB.includes("On")) startB = "13";

  return Number(startB) - Number(startA);
}
