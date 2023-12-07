export function sabb(s: string, val: number, happiness: number): string {
  const sabbaticalLettersInS = s
    .split("")
    .reduce((acc, curr) => ("sabbatical".includes(curr) ? acc + 1 : acc), 0);

  return sabbaticalLettersInS + val + happiness > 22
    ? "Sabbatical! Boom!"
    : "Back to your desk, boy.";
}
