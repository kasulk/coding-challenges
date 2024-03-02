export function numPrimorial(n: number): number {
  let output = 1;
  let num = 1;

  for (let i = 0; i < n; ) {
    if (isPrime(num)) {
      output *= num;
      i++;
    }
    num++;
  }

  return output;
}

function isPrime(num: number): boolean {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
