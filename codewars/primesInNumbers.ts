export function primeFactors(n: number): string {
  let result: string = "";
  let rest = n;

  for (let i = 2; i <= Math.sqrt(rest); i++) {
    if (!isPrime(i)) continue;
    let power = 0;

    while (rest % i === 0) {
      power++;
      rest /= i;
    }

    if (power) {
      result += power > 1 ? `(${i}**${power})` : `(${i})`;
    }
  }

  return rest === 1 ? result : result + `(${rest})`;
}

function isPrime(n: number): boolean {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
