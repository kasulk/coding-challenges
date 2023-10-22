export function triangular(num: number): number {
  // if even, multiply num/2 by num+1
  // if odd, multiply num by (num+1)/2

  if (num < 0) return 0;
  return num % 2 === 0 ? (num / 2) * (num + 1) : num * ((num + 1) / 2);
}
