function battle(x, y) {
  if (strPower(x) > strPower(y)) return x;
  if (strPower(y) > strPower(x)) return y;
  return "Tie!";
}

function strPower(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return str.split("").reduce((sum, currLetter) => {
    const isCurrLetterLowerCase = currLetter === currLetter.toLowerCase();
    const letterScore = alphabet.indexOf(currLetter.toLowerCase()) + 1;
    return isCurrLetterLowerCase ? sum + letterScore / 2 : sum + letterScore;
  }, 0);
}
