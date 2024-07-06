function goodVsEvil(good, evil) {
  const goodWorths = [1, 2, 3, 3, 4, 10];
  const evilWorths = [1, 2, 2, 2, 3, 5, 10];

  const goodWorthSum = good
    .split(" ")
    .reduce((sum, num, i) => sum + num * goodWorths[i], 0);

  const evilWorthSum = evil
    .split(" ")
    .reduce((sum, num, i) => sum + num * evilWorths[i], 0);

  const result = goodWorthSum - evilWorthSum;

  if (result > 0) return "Battle Result: Good triumphs over Evil";
  if (result < 0) return "Battle Result: Evil eradicates all trace of Good";
  return "Battle Result: No victor on this battle field";
}
