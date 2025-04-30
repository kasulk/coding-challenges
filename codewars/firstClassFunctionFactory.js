function factory(n) {
  return function (nums) {
    return nums.map((num) => num * n);
  };
}
