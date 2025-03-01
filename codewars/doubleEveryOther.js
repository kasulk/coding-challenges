function doubleEveryOther(nums) {
  return nums.map((num, i) => (i % 2 ? num * 2 : num));
}
