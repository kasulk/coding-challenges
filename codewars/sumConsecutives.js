function sumConsecutives(nums) {
  const result = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    const prev = nums[i - 1];
    const curr = nums[i];
    const next = nums[i + 1];

    if (curr === next || curr === prev) {
      sum += curr;

      if (curr !== next) {
        result.push(sum);
        sum = 0;
      }

      continue;
    }

    result.push(curr);
  }

  return result;
}
