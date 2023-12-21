const consonants = "GgDdRrPpLlKk";
const vowels = "AaEeYyOoUuIi";

export function code(str: string): string {
  return [...str]
    .map((char) => {
      let charIndex: number;

      if (consonants.includes(char)) {
        charIndex = consonants.indexOf(char);
        return vowels[charIndex];
      }

      if (vowels.includes(char)) {
        charIndex = vowels.indexOf(char);
        return consonants[charIndex];
      }

      return char;
    })
    .join("");
}

export function encode(str: string): string {
  return code(str);
}

export function decode(str: string): string {
  return code(str);
}
