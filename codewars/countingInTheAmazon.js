function countArara(n) {
  const numAdak = Math.trunc(n / 2);
  const numAnane = n % 2;
  const result = Array(numAdak).fill("adak");

  if (numAnane) result.push("anane");

  return result.join(" ");
}
