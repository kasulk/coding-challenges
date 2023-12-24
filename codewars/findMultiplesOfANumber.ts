export function findMultiples(num: number, limit: number): number[] {
  const multiples: number[] = [];
  let current = num;

  while (current <= limit) {
    multiples.push(current);
    current += num;
  }

  return multiples;
}
