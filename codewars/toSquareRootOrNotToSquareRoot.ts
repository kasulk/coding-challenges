export function squareOrSquareRoot(nums: number[]): number[] {
  return nums.map((num) => {
    const root = Math.sqrt(num);

    if (root % 1 === 0) return root;
    return num * num;
  });
}
