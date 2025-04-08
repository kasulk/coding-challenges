function findMissing(nums1, nums2) {
  return sum(nums1) - sum(nums2);
}

function sum(nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}
