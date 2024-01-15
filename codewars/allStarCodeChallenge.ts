export function toTime(seconds: number): string {
  const totalMins = Math.trunc(seconds / 60);
  const hours = Math.trunc(totalMins / 60);
  const mins = totalMins - hours * 60;

  return `${hours} hour(s) and ${mins} minute(s)`;
}
