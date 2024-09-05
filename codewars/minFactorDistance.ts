export function minDistance(num: number): number {
  if (isPrime(num)) return num - 1;

  const firstFewFactors: number[] = [];

  for (let i = 1; i < Math.sqrt(num) * 2; i++) {
    if (num % i === 0) firstFewFactors.push(i);
  }

  const firstFewDistances = firstFewFactors.map((curr, i, arr) => {
    const next = arr[i + 1] || Infinity;
    return next - curr;
  });

  return Math.min(...firstFewDistances);
}

function isPrime(num: number): boolean {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
