export function factorial(n: number): number {
  // n! = 1 * 2 * 3 * ... * (n-1) * n
  // create a result variable with value 1
  // loop n times, multiply the result by each integer
  // return the result

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}
