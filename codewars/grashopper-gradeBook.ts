export function getGrade(...scores: number[]): string {
  const average = scores.reduce((sum, score) => sum + score) / scores.length;

  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";

  return "F";
}
