export function divisors(n: number): number {
  // loop through all numbers from 1 to n
  // for every iteration,
  // divide the input number by i
  // if there is no rest, increase a counter by 1
  // return the value of the counter

  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }

  return count;
}
