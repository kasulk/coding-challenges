function sumEvenNumbers(nums) {
  return nums.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
}
