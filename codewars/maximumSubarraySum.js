function maxSequence(nums) {
  let maxSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    let currSum = curr;

    for (let j = 1; i + j < nums.length; j++) {
      if (currSum > maxSum) maxSum = currSum;

      const next = nums[i + j];
      currSum += next;
    }

    if (currSum > maxSum) maxSum = currSum;
  }

  return maxSum;
}
