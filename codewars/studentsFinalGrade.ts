export function finalGrade(examGrade: number, numProjects: number): number {
  if (examGrade > 90 || numProjects > 10) return 100;
  if (examGrade > 75 && numProjects >= 5) return 90;
  if (examGrade > 50 && numProjects >= 2) return 75;
  return 0;
}
