function upArray(nums) {
  if (!nums.length) return null;

  for (let num of nums) {
    if (num < 0 || num > 9) return null;
  }

  let bigIntNumber = BigInt(nums.join(""));
  bigIntNumber++;

  const newNums = bigIntNumber
    .toString()
    .padStart(nums.length, "0")
    .split("")
    .map(Number);

  return newNums;
}
