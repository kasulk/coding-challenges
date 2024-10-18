export function decoder(sequence: string): number[] {
  const nums: number[] = [];
  let preZeroCount = 0;
  let numBits = 0;
  let currBits = "";
  let isBitMode = false;

  for (let i = 0; i < sequence.length; i++) {
    const curr = sequence[i];

    if (curr === "1" && !isBitMode) {
      numBits = preZeroCount + 1;
      preZeroCount = 0;
      isBitMode = true;
    }

    if (!isBitMode) {
      preZeroCount++;
    }

    if (isBitMode && numBits) {
      currBits += curr;
      numBits--;

      if (!numBits) {
        const currNum = parseInt(currBits, 2) - 1;
        nums.push(currNum);
        currBits = "";

        isBitMode = false;
      }
    }
  }

  return nums;
}
