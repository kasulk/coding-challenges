function allNonConsecutive(nums) {
  return nums.reduce((acc, curr, i) => {
    const prev = nums[i - 1];

    if (!i || curr === prev + 1) {
      return acc;
    }
    return [...acc, { i: i, n: curr }];
  }, []);
}
