export function step(
  gap: number,
  start: number,
  end: number
): [number, number] | null {
  for (let i = start; i <= end - gap; i++) {
    const curr = i;

    if (isPrime(curr) && isPrime(curr + gap)) {
      return [curr, curr + gap];
    }
  }

  return null;
}

function isPrime(num: number): boolean {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
