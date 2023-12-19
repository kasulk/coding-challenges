export const f = (
  x: number,
  numsObj: { a: number; b: number; c: number }
): number => {
  //
  const nums = [numsObj.a, numsObj.b, numsObj.c];
  const nextIndex = (nums.indexOf(x) + 1) % 3;

  return nums[nextIndex];
};
