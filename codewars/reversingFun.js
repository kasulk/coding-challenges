function flipNumber(str) {
  const isOddLen = str.length % 2 !== 0;
  const output = [];

  for (let i = 0; i < str.length / 2; i++) {
    const back = str[str.length - 1 - i];
    const front = str[i];
    output.push(back, front);
  }

  if (isOddLen) output.pop();

  return output.join("");
}
