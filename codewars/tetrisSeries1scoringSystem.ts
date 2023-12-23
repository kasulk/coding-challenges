export function getScore(nums: number[]): number {
  let sumLines = 0;
  const linesPoints: { [key: number]: number } = {
    1: 40,
    2: 100,
    3: 300,
    4: 1200,
  };

  return nums.reduce((sum, currNumLines) => {
    if (currNumLines) {
      const currPoints =
        linesPoints[currNumLines] * (Math.trunc(sumLines / 10) + 1);
      sumLines += currNumLines;
      return sum + currPoints;
    }
    return sum;
  }, 0);
}
