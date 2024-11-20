export function battleCodes(armyLetters: string, armyNumbers: string): string {
  if (!armyLetters || !armyNumbers) return "Peace";

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let armyLettersRemaining = [...armyLetters];
  let armyNumbersRemaining = [...armyNumbers];

  while (armyLettersRemaining.length && armyNumbersRemaining.length) {
    const digit = Number(armyNumbersRemaining.shift());
    const lastLetter = armyLettersRemaining.pop()!;
    const forelastLetter = armyLettersRemaining.pop();

    const digitLife = digit - (alphabet.indexOf(lastLetter) + 1);
    const newDigit = digitLife > 0 ? digitLife.toString() : "";

    const newLastLetter = calcNewLetter(lastLetter, digit);
    const newForelastLetter = forelastLetter
      ? calcNewLetter(forelastLetter, digit)
      : null;

    if (newForelastLetter) armyLettersRemaining.push(newForelastLetter);
    if (newLastLetter) armyLettersRemaining.push(newLastLetter);
    if (newDigit) armyNumbersRemaining.unshift(newDigit);
  }

  if (armyLettersRemaining.length) return armyLettersRemaining.join("");
  if (armyNumbersRemaining.length) return armyNumbersRemaining.join("");
  return "Draw";
}

function calcNewLetter(letter: string, digit: number): string | null {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letterPower = alphabet.indexOf(letter) + 1;
  const letterLife = letterPower - digit;
  return alphabet[letterLife - 1] || null;
}
