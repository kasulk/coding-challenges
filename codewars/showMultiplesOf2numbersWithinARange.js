function getMultiples(first, second, last) {
  const largeNum = Math.max(first, second);
  const smallNum = Math.min(first, second);
  const multiples = [];

  for (let curr = largeNum; curr < last; curr += largeNum) {
    if (curr % smallNum === 0) multiples.push(curr);
  }

  return multiples;
}
