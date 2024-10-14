function lostSheep(friday, saturday, total) {
  return total - sum(friday) - sum(saturday);
}

function sum(nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}
