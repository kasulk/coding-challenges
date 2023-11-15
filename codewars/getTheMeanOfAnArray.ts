export function getAverage(marks: number[]): number {
  return Math.floor(marks.reduce((sum, mark) => sum + mark) / marks.length);
}
