function solution(nums) {
  const output = [];
  let currRange = [];

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const nextNum = nums[i + 1] ?? Infinity;
    const distance = Math.abs(currNum - nextNum);

    if (distance === 1) {
      currRange.push(currNum);
      continue;
    }

    if (currRange.length) {
      currRange.push(currNum);

      if (currRange.length >= 3) output.push(currRange[0] + "-" + currNum);
      else output.push(currRange[0], currNum);

      currRange = [];
      continue;
    }

    output.push(currNum);
  }

  return output.join(",");
}
