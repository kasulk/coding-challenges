export function isPowerOfTwo(n: number): boolean {
  // divide input number by 2 while > 1
  // if at some point its not divisible by 2, return false
  // after the loop, return true

  if (!n) return false;

  while (n > 1) {
    n = n / 2;
    if (n % 1 !== 0) return false;
  }

  return true;
}
