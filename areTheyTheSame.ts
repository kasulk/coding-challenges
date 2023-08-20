export function comp(a: number[] | null, b: number[] | null): boolean {
  // sort both arrays
  // loop through both arrays
  // check if each element of b is the square of the element with the same index in a
  // if not, return false
  // after the loop, return true

  if (!a || !b) return false;

  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);

  for (let i = 0; i < a.length; i++) {
    if (a[i] * a[i] !== b[i]) return false;
  }

  return true;
}
