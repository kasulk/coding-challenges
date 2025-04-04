function multiples(first, second, last) {
  const max = Math.max(first, second);
  const min = Math.min(first, second);
  const result = [];

  for (let curr = max; curr < last; curr += max) {
    if (curr % min === 0) result.push(curr);
  }

  return result;
}
