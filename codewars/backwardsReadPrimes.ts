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

  // "Trial Division", by chatGPT
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
