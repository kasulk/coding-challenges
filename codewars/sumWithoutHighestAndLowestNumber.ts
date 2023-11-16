export function sumArray(array: number[] | null): number {
  return array
    ? array
        .sort((a, b) => a - b)
        .reduce(
          (sum, num, i) =>
            i === 0 || i === array.length - 1 ? sum : sum + num,
          0
        )
    : 0;
}
