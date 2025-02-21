function pattern(n) {
  if (n < 1) return "";

  const first = Array(n)
    .fill(0)
    .map((_, i) => n - i);

  const arrays = [first];

  for (let i = 0; i < first.length; i++) {
    const nums = arrays[i].slice();
    nums.pop();

    if (!nums.length) break;
    arrays.push(nums);
  }

  const strs = arrays.map((nums) => nums.join(""));

  return strs.join("\n");
}
