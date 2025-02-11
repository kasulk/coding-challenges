function solve(str) {
  const alphabet = "abcdefghijklmnopqrstuvwyz";
  const sortedStr = [...str].sort().join("");
  return alphabet.includes(sortedStr);
}
