export function beeramid(bonus: number, price: number): number {
  let numCans = Math.trunc(bonus / price);

  for (let level = 1; ; level++) {
    const currNeededCans = level ** 2;
    numCans -= currNeededCans;

    if (numCans < 0) return level - 1;
  }
}
