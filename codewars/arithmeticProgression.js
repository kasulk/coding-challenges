function arithmeticSequenceElements(first, diff, n) {
  const sequence = [first];

  for (let i = 1; i < n; i++) {
    const prev = sequence.slice(-1)[0];
    sequence.push(prev + diff);
  }

  return sequence.join(", ");
}
