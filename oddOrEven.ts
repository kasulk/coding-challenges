export function oddOrEven(array: number[]): string {
  return array.reduce((acc, curr) => acc + curr, 0) % 2 ? "odd" : "even";
}
