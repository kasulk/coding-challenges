export function apple(x: number | string): string {
  return Math.pow(Number(x), 2) > 1000
    ? `It's hotter than the sun!!`
    : `Help yourself to a honeycomb Yorkie for the glovebox.`;
}
