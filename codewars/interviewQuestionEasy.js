function getStrings(city) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letterCounts = {};

  city
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (alphabet.includes(char)) {
        if (letterCounts[char]) letterCounts[char]++;
        else letterCounts[char] = 1;
      }
    });

  return Object.entries(letterCounts)
    .map(([letter, num]) => `${letter}:${"*".repeat(num)}`)
    .join(",");
}
