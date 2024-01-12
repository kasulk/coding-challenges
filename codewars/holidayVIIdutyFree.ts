export function dutyFree(
  bottlePrice: number,
  discount: number,
  holidayCost: number
): number {
  return Math.floor(holidayCost / ((bottlePrice * discount) / 100));
}
