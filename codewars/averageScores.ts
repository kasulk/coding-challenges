export function average(scores: number[]): number {
  return Math.round(
    scores.reduce((sum, score) => sum + score, 0) / scores.length
  );
}
