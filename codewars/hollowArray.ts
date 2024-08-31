export function isHollow(nums: number[]): boolean {
  const indexOfFirstZero = nums.indexOf(0);
  const startAndEndLen = indexOfFirstZero;
  const middleLen = nums.length - 2 * startAndEndLen;

  let start: number[] = nums.slice(0, startAndEndLen);
  let middle: number[] = nums.slice(startAndEndLen, middleLen + 1);
  let end: number[] = nums.slice(nums.length - startAndEndLen);

  const isMiddleAllZeros = middle.every((num) => num === 0);

  if (
    isMiddleAllZeros &&
    !start.includes(0) &&
    !end.includes(0) &&
    middleLen >= 3
  )
    return true;
  return false;
}
