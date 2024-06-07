export function vowelBack(str: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return [...str]
    .map((letter) => {
      const currIndex = alphabet.indexOf(letter);
      let steps: number;

      if (letter === "c" || letter === "o") steps = -1;
      else if (letter === "d") steps = -3;
      else if (letter === "e") steps = -4;
      else if ("aeiou".includes(letter)) steps = -5;
      else steps = 9;

      const newIndex = (currIndex + 26 + steps) % 26;
      const newLetter = alphabet[newIndex];

      if ("code".includes(newLetter)) return letter;
      return newLetter;
    })
    .join("");
}
