export function primeFactors(num: number): string {
  let result: string = "";
  let rest = num;

  for (let factor = 2; factor <= Math.sqrt(rest); factor++) {
    if (isPrime(factor)) {
      let power = 0;

      while (rest % factor === 0) {
        power++;
        rest /= factor;
      }

      if (power) {
        result += power > 1 ? `(${factor}**${power})` : `(${factor})`;
      }
    }
  }

  result += rest === 1 ? "" : `(${rest})`;

  return result;
}

function isPrime(num: number): boolean {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
