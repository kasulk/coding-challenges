export function drawStairs(n: number): string {
  return Array(n)
    .fill("I")
    .map((step, i) => " ".repeat(i) + step)
    .join("\n");
}
