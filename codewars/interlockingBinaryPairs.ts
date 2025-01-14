export function interlockable(a: bigint, b: bigint): boolean {
  const binaryA = a.toString(2);
  const binaryB = b.toString(2);
  const lenA = binaryA.length;
  const lenB = binaryB.length;
  const minLen = Math.min(lenA, lenB);

  for (let i = 0; i < minLen; i++) {
    const currBitA = binaryA[lenA - 1 - i];
    const currBitB = binaryB[lenB - 1 - i];
    if (currBitA === "1" && currBitB === "1") return false;
  }

  return true;
}
