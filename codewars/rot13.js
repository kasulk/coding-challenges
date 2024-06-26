function rot13(message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return [...message]
    .map((char) => {
      const isLetter = alphabet.includes(char.toLowerCase());
      if (!isLetter) return char;

      const isLowerCase = alphabet.includes(char);
      const currIndex = alphabet.indexOf(char.toLowerCase());
      const newindex = (currIndex + 13) % 26;

      if (isLowerCase) return alphabet[newindex];
      return alphabet[newindex].toUpperCase();
    })
    .join("");
}
