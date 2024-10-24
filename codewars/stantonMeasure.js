function stantonMeasure(nums) {
  const n = nums.filter((num) => num === 1).length;
  return nums.filter((num) => num === n).length;
}
