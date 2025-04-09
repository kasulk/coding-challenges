function noRepeat(str) {
  const chars = str.split("");

  for (const curr of chars) {
    const currCount = chars.filter((char) => char === curr).length;
    if (currCount === 1) return curr;
  }
}
