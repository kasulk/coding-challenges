function scrollingText(text) {
  const result = [text.toUpperCase()];

  for (let i = 0; i < text.length - 1; i++) {
    const curr = result[i];
    const currChars = curr.split("");
    const firstChar = currChars.shift();
    currChars.push(firstChar);
    result.push(currChars.join(""));
  }

  return result;
}
