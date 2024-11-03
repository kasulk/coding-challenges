function dbSort(arr) {
  const nums = [];
  const strs = [];

  arr.forEach((el) => {
    if (typeof el === "number") nums.push(el);
    if (typeof el === "string") strs.push(el);
  });

  return [...nums.sort((a, b) => a - b), ...strs.sort()];
}
