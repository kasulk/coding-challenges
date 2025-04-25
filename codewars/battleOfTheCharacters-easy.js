function battle(x, y) {
  if (strPower(x) > strPower(y)) return x;
  if (strPower(y) > strPower(x)) return y;
  return "Tie!";
}

function strPower(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return str
    .split("")
    .reduce((sum, currLetter) => sum + alphabet.indexOf(currLetter) + 1, 0);
}
