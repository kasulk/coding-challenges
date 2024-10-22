function reverseBits(num) {
  const reversedBits = num.toString(2).split("").reverse().join("");
  return parseInt(reversedBits, 2);
}
