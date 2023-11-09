export function mygcd(x: number, y: number): number {
  // make use of euclidean algorithm
  // i.e. division of remainder of x by y
  // until the rest is 0

  const remainder = x % y;

  if (remainder === 0) return y;

  return mygcd(y, remainder);
}
