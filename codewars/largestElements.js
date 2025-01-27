function largest(n, nums) {
  return n ? nums.sort((a, b) => a - b).slice(-n) : [];
}
