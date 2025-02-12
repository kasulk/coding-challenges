function findMissingNumber(sequence) {
  if (!sequence.length) return 0;

  const seqArr = sequence.split(" ");
  const nums = [];

  for (const element of seqArr) {
    const numified = Number(element);
    if (isNaN(numified)) return 1;
    nums.push(numified);
  }

  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length; i++) {
    const curr = sortedNums[i];
    const prev = sortedNums[i - 1] || 0;

    if (curr !== prev + 1) return prev + 1;
  }

  return 0;
}
