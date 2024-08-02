function firstNonRepeatingLetter(str) {
  let chars = [...str];

  for (let i = 0; i < str.length; i++) {
    const curr = chars.splice(i, 1)[0];
    const restLowChars = chars.map((char) => char.toLowerCase());

    if (!restLowChars.includes(curr.toLowerCase())) return curr;
    chars = [...str];
  }

  return "";
}
