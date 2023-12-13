export function mod256WithoutMod(num: number): number {
  if (Math.abs(num) >= 256) {
    return num - Math.trunc(num / 256) * 256;
  }

  return num;
}
