export function golfScoreCalculator(
  parList: string,
  scoreList: string
): number {
  //
  return scoreList
    .split("")
    .reduce((sum, score, i) => sum + Number(score) - Number(parList[i]), 0);
}
