export function isHollow(nums: number[]): boolean {
  const startLen = nums.indexOf(0);
  const middleLen = nums.length - startLen * 2;

  const [start, middle, end] = [
    nums.slice(0, startLen),
    nums.slice(startLen, middleLen + 1),
    nums.slice(nums.length - startLen),
  ];

  const isMiddleAllZeros = middle.every((num) => num === 0);

  return (
    isMiddleAllZeros && middleLen >= 3 && !start.includes(0) && !end.includes(0)
  );
}
