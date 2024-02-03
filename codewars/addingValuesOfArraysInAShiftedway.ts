export function addingShifted(arrays: number[][], shift: number): number[] {
  const subArrLength = arrays[0].length;
  const resultLength = subArrLength + (arrays.length - 1) * shift;

  const sums = Array(resultLength).fill(0);

  for (let i = 0; i < resultLength; i++) {
    for (let j = 0; j < arrays.length; j++) {
      const k = i - shift * j;
      sums[i] += arrays[j][k] || 0;
    }
  }

  return sums;
}
