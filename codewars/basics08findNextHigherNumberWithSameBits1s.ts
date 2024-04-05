export function nextHigher(num: number): number {
  const numOnesInBinaryOfInputNum = numOnesInBinaryOfNum(num);
  const next = num + 1;

  for (let i = next; ; i++) {
    if (numOnesInBinaryOfNum(i) === numOnesInBinaryOfInputNum) return i;
  }
}

function numOnesInBinaryOfNum(num: number): number {
  return num.toString(2).replace(/0/g, "").length;
}
