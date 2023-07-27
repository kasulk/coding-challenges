export function getCellAddresses(range: string): string[] {
  // check if input is valid, if not, return []
  // for every number, go through the letters
  // append each letter to the current number
  // go to next number and do the same

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const rangeEndpoints = range.split(":");
  let output: string[] = [];

  // input valid?
  if (rangeEndpoints[0] === rangeEndpoints[1]) return [];
  // just one letter per rangeEndpoint
  if (!Number(rangeEndpoints[0][1]) || !Number(rangeEndpoints[1][1])) return [];
  // first rangeEndpoint letter has to come first in the alphabet
  if (
    alphabet.indexOf(rangeEndpoints[0][0]) >
    alphabet.indexOf(rangeEndpoints[1][0])
  )
    return [];

  // seperate number from letter
  const rangeEndpointsLetters = rangeEndpoints.map(
    (rangeEndpoint) => rangeEndpoint[0]
  );
  const rangeEndpointsNumbers = rangeEndpoints.map((rangeEndpoint) =>
    Number(rangeEndpoint.substring(1, rangeEndpoint.length))
  );

  // save range letters to array
  // filter if index of current letter is >= first range letter && <= second range letter
  const rangeLetters = alphabet
    .split("")
    .filter(
      (letter) =>
        alphabet.indexOf(letter) >=
          alphabet.indexOf(rangeEndpointsLetters[0]) &&
        alphabet.indexOf(letter) <= alphabet.indexOf(rangeEndpointsLetters[1])
    );

  for (let i = rangeEndpointsNumbers[0]; i <= rangeEndpointsNumbers[1]; i++) {
    for (let j = 0; j < rangeLetters.length; j++) {
      output.push(rangeLetters[j] + i);
    }
  }

  return output;
}
