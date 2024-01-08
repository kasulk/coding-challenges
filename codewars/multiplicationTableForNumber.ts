export function multiTable(num: number): string {
  return Array(10)
    .fill(0)
    .map((_, i) => `${i + 1} * ${num} = ${(i + 1) * num}`)
    .join("\n");
}
