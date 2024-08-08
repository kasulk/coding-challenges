function incrementString(str) {
  const lastLetter = getLastLetter(str);
  const lastLetterIndex = str.lastIndexOf(lastLetter);

  const strWithoutTrailingNum = str.slice(0, lastLetterIndex + 1);
  const trailingNumStr = str.slice(lastLetterIndex + 1);

  const newNum = Number(trailingNumStr) + 1;
  const newNumStr = newNum.toString().padStart(trailingNumStr.length, "0");

  return strWithoutTrailingNum + newNumStr;
}

function getLastLetter(str) {
  const reversedStr = [...str].reverse();
  for (let char of reversedStr) {
    if (!Number.isInteger(Number(char))) return char;
  }
}
