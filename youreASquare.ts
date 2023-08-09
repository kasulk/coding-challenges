export default function isSquare(n: number): boolean {
  // use Math.sqrt on the input
  // check if it is an integer
  return Number.isInteger(Math.sqrt(n));
}
