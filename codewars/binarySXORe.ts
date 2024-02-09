export const sxore = function (num: number): number {
  const rest = num % 4;

  if (rest === 1) return 1;
  if (rest === 2) return num + 1;
  if (rest === 3) return 0;
  return num;
};
