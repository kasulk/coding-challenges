function sumConsecutives(nums) {
  let result = [];
  let temp = 0;

  for (let i = 0; i < nums.length; i++) {
    const prev = nums[i - 1];
    const curr = nums[i];
    const next = nums[i + 1];

    if (next === curr || curr === prev) {
      temp += curr;

      if (curr !== next) {
        result.push(temp);
        temp = 0;
      }

      continue;
    }

    result.push(curr);
  }

  return result;
}
