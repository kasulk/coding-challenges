export function pattern(num: number): string {
  return num > 0
    ? Array(num)
        .fill("x")
        .map((_, i) => String(i + 1).repeat(i + 1))
        .join("\n")
    : "";
}
