export function fusc(n: number): number {
  // if n is 0 or 1, return n
  // else,
  // if n is even, return fusc(n/2)
  // if n is odd, return fusc(n/2 - 0.5) + fusc(n/2 + 0.5)

  if (n <= 1) return n;

  const nNew = n / 2;

  if (n % 2 === 0) return fusc(nNew);

  return fusc(Math.floor(nNew)) + fusc(Math.ceil(nNew));
}
