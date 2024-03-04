export function getLengthOfMissingArray(arrays: any[]): number {
  const sortedLengths = arrays.map((arr) => arr.length).sort((a, b) => a - b);
  const start = sortedLengths[0];

  for (let i = 0; i < sortedLengths.length; i++) {
    const curr = sortedLengths[i];

    if (!curr) return 0;
    if (curr !== i + start) return i + start;
  }

  return 0;
}
