export function cantBeatSoJoin(nums: number[][]): number[] {
  return nums
    .sort((a, b) => {
      const sumA = a.reduce((sum, curr) => sum + curr, 0);
      const sumB = b.reduce((sum, curr) => sum + curr, 0);

      return sumB - sumA;
    })
    .flat();
}
