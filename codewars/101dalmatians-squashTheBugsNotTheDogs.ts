export function howManyDalmatians(num: number): string {
  if (num <= 10) return "Hardly any";
  if (num <= 50) return "More than a handful!";
  if (num === 101) return "101 DALMATIANS!!!";

  return "Woah that's a lot of dogs!";
}
