export function isLeap(year: number): boolean {
  // if the year is divisible by 400, return true
  // if the year is divisible by 100, return false
  // if the year is divisible by 4, return true
  // else false

  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}
