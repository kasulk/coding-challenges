function numObj(nums) {
  return nums.map((num) => {
    const obj = {};
    obj[num] = String.fromCharCode(num);
    return obj;
  });
}
