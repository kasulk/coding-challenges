function scrollingText(text) {
  const output = [text.toUpperCase()];

  for (let i = 0; i < text.length - 1; i++) {
    const currChars = output[i].split("");
    const firstChar = currChars.shift();
    currChars.push(firstChar);
    output.push(currChars.join(""));
  }

  return output;
}
