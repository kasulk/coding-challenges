function min(nums, toReturn) {
  const min = Math.min(...nums);
  return toReturn === "value" ? min : nums.indexOf(min);
}
