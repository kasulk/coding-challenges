export function swapAdjacentBits(num: number): number {
  // turn input number into binary string
  // if the length is odd, add a zero in front
  // create array with pairs
  // reverse the pairs

  let binary = num.toString(2);

  if (binary.length % 2 !== 0) binary = "0" + binary;

  const bitPairs = binary.match(/.{1,2}/g) || ["00"];
  const reversedBitPairs = bitPairs.map((bitPair) =>
    [...bitPair].reverse().join("")
  );

  const binarySwapped = reversedBitPairs.join("");

  return parseInt(binarySwapped, 2);
}
