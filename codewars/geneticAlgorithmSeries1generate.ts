export function generate(length: number): string {
  return Array(length)
    .fill("x")
    .map((x) => Math.round(Math.random()))
    .join("");
}
