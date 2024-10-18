export function decoder(sequence: string): number[] {
  const nums: number[] = [];
  let isBitMode = false;
  let currBits = "";
  let preZeroCount = 0;
  let numCurrBits = 0;

  for (const element of sequence) {
    if (element === "1" && !isBitMode) {
      isBitMode = true;
      numCurrBits = preZeroCount + 1;
      preZeroCount = 0;
    }

    if (!isBitMode) preZeroCount++;

    if (isBitMode && numCurrBits) {
      currBits += element;
      numCurrBits--;

      if (!numCurrBits) {
        const decodedNum = parseInt(currBits, 2);
        nums.push(decodedNum - 1);

        currBits = "";
        isBitMode = false;
      }
    }
  }

  return nums;
}
