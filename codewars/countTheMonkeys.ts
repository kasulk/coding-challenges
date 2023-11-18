export function monkeyCount(numMonkeys: number): number[] {
  return Array(numMonkeys)
    .fill("Monkey")
    .map((_, i) => i + 1);
}
