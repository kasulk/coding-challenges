export function twoArePositive(a: number, b: number, c: number): boolean {
  // create array with input arguments
  // create counter
  // loop through array
  // increase counter for positiv number
  // return true if counter is 2

  const numbers = [a, b, c];
  let positiveCount = 0;

  for (let number of numbers) {
    if (number > 0) positiveCount++;
  }

  if (positiveCount === 2) return true;

  return false;
}
