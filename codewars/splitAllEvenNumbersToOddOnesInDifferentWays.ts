export function splitAllEvenNumbers(nums: number[], way: number): number[] {
  return nums.flatMap((num) => {
    if (!isEven(num)) return num;
    if (way === 0) return splitEvenNumToClosestOdds(num);
    if (way === 1) return splitEvenNumToFarestOdds(num);
    if (way === 2) return splitEvenNumToEqualAndMaxPossible(num);
    return splitEvenNumToAllOnes(num);
  });
}

function splitEvenNumToClosestOdds(num: number): number[] {
  const half = num / 2;
  return isEven(half) ? [half - 1, half + 1] : [half, half];
}

function splitEvenNumToFarestOdds(num: number): number[] {
  return [1, num - 1];
}

function splitEvenNumToEqualAndMaxPossible(num: number): number[] {
  let half = num / 2;
  while (isEven(half)) half /= 2;
  return Array(num / half).fill(half);
}

function splitEvenNumToAllOnes(num: number): number[] {
  return Array(num).fill(1);
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}
