export function lineupStudents(students: string): string[] {
  return students
    .slice()
    .split(" ")
    .sort((a, b) => {
      if (a.length !== b.length) return b.length - a.length;
      else return b.localeCompare(a);
    });
}
