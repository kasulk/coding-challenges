export const stringy = (n: number): string =>
  Array(n)
    .fill(0)
    .map((_, i) => (i % 2 === 0 ? 1 : 0))
    .join("");
