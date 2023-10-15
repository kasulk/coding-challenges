export function cookingTime(eggs: number): number {
  // divide the number of eggs by 8
  // round the result up and multiply it by 5

  return Math.ceil(eggs / 8) * 5;
}
