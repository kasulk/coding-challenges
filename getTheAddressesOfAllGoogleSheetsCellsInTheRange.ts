export function getCellAddresses(range: string): string[] {
  // check if input is valid, if not, return []
  // - first letter has to be first in the alphabet
  // - only single letters are allowed
  // for every number, go through the letters
  // append each letter to the current number
  // go to next number and do the same

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const rangePoints = range.split(":");

  if (!Number(rangePoints[0][1]) || !Number(rangePoints[1][1])) return [];
  if (
    alphabet.indexOf(rangePoints[0][0]) <= alphabet.indexOf(rangePoints[1][0])
  )
    return [];

  // seperate number from letter
  // rangePoints[0].replace(/[A-Z]/g,'')
  //   rangePoints[0][0]; // letter
  const rangePointsLetters = rangePoints.map((rangePoint) => rangePoint[0]);
  //   rangePoints[0].substring(1, rangePoints[0].length - 1); // number
  const rangePointsNumbers = rangePoints.map((rangePoint) =>
    Number(rangePoint.substring(1, rangePoint.length - 1))
  );

  // save range letters to array
  // go from index of first letter in alphabet to index of second letter and push each letter to array
  // filter if index of current letter is >= first range letter && <= second range letter
  const rangeLetters = alphabet
    .split("")
    .filter(
      (letter) =>
        alphabet.indexOf(letter) >= alphabet.indexOf(rangePointsLetters[0]) &&
        alphabet.indexOf(letter) <= alphabet.indexOf(rangePointsLetters[1])
    );

  for (let letter of rangeLetters) {
  }

  const numbersRange = rangePointsNumbers[1] - rangePointsNumbers[0];
  let output: string[] = [];

  for (let i = rangePointsNumbers[0]; i < rangePointsNumbers[1]; i++) {
    //   for (let i = 0; i < rangePointsNumbers[1]; i++) {
    output = rangeLetters.map((letter, j) => letter + i);
  }

  return output;
}
