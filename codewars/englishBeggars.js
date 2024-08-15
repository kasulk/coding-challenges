function beggars(earnings, numBeggars) {
  if (!numBeggars) return [];

  const outcomes = Array(numBeggars).fill(0);
  let beggar = 0;

  earnings.forEach((earning, i) => {
    outcomes[beggar] += earning;
    beggar++;
    if (beggar === numBeggars) beggar = 0;
  });

  return outcomes;
}
