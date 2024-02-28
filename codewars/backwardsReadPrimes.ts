export function backwardsPrime(start: number, stop: number): number[] {
  const backwardsPrimes: number[] = [];

  for (let i = start; i <= stop; i++) {
    if (isPrime(i)) {
      const revNum = Number([...String(i)].reverse().join(""));
      if (isPrime(revNum) && revNum !== i) backwardsPrimes.push(i);
    }
  }

  return backwardsPrimes;
}

function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }

    i += 6;
  }

  return true;
}
