export function quarterOf(month: number): number {
  if ([1, 2, 3].includes(month)) return 1;
  if ([4, 5, 6].includes(month)) return 2;
  if ([7, 8, 9].includes(month)) return 3;
  return 4;
}
