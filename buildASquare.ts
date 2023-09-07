export function generateShape(int: number): string {
  // create an array with int elements of 'x'
  // replace every element with int number of '+'
  // join the elements to a string with line breaks in between

  return Array(int)
    .fill("x")
    .map((_, i) => "+".repeat(int))
    .join("\n");
}
