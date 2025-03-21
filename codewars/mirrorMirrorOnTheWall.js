function mirror(nums) {
  const head = [...nums].sort((a, b) => a - b);
  const tail = [...head].reverse().slice(1);

  return [...head, ...tail];
}
