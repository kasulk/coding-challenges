export function compare(str1: string | null, str2: string | null): boolean {
  const inputs = [str1, str2];
  let charCodeSums = [0, 0];

  for (let i = 0; i < inputs.length; i++) {
    const currStr = inputs[i];

    if (currStr && !/[^a-z]/i.test(currStr)) {
      charCodeSums[i] = currStr
        .toUpperCase()
        .split("")
        .reduce((charCodeSum, letter) => charCodeSum + letter.charCodeAt(0), 0);
    }
  }

  return charCodeSums[0] === charCodeSums[1];
}
