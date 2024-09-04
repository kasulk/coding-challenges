export function twinPrime(n: number): number {
  let numTwinPrimes = 0;

  for (let i = 2; i < n; i++) {
    if (isPrime(i) && isPrime(i + 2)) numTwinPrimes++;
  }

  return numTwinPrimes;
}

function isPrime(n: number): boolean {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}
