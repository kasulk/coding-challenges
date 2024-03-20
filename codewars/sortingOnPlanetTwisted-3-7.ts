export function sortTwisted37(nums: number[]): number[] {
  return [...nums]
    .map((num) => swap7sAnd3s(num))
    .sort((a, b) => a - b)
    .map((num) => swap7sAnd3s(num));
}

export function swap7sAnd3s(num: number): number {
  return Number(
    num.toString().replace(/3/g, "x").replace(/7/g, "3").replace(/x/g, "7")
  );
}
