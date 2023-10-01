export const reverseSeq = (n: number): number[] => {
  return Array(n)
    .fill("x")
    .map((_, i) => n - i);
};
