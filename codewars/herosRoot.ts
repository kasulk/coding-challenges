export function intRac(num: number, guess: number): number {
  let newGuess = getNewGuess(num, guess);
  let numProgressions = 1;
  let prevGuess = guess;
  let error = 1;

  while (Math.abs(prevGuess - newGuess) >= error) {
    prevGuess = newGuess;
    newGuess = getNewGuess(num, prevGuess);
    numProgressions++;
  }

  return numProgressions;
}

function getNewGuess(num: number, prevGuess: number) {
  return Math.trunc((prevGuess + num / prevGuess) / 2);
}
