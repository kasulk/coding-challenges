type Object = { [key: string]: string };

const map: Object = {
  "A": ". . .",
  "B": ".. . .",
  "C": "... . .",
  "D": ". .. .",
  "E": ".. .. .",
  "F": "... .. .",
  "G": ". ... .",
  "H": ".. ... .",
  "I": "... ... .",
  "J": ". . ..",
  "K": ".. . ..",
  "L": "... . ..",
  "M": ". .. ..",
  "N": ".. .. ..",
  "O": "... .. ..",
  "P": ". ... ..",
  "Q": ".. ... ..",
  "R": "... ... ..",
  "S": ". . ...",
  "T": ".. . ...",
  "U": "... . ...",
  "V": ". .. ...",
  "W": ".. .. ...",
  "X": "... .. ...",
  "Y": ". ... ...",
  "Z": ".. ... ...",
  " ": "... ... ...",
};

const reversedMap = Object.fromEntries(
  Object.entries(map).map(([key, value]) => [value, key])
);

export function encode(str: string): string {
  return str
    .split("")
    .map((char) => map[char])
    .join(" ");
}

export function decode(str: string): string {
  const result: string[] = [];
  let triple: string[] = [];

  str.split(" ").forEach((dots, i) => {
    triple.push(dots);

    if (i % 3 === 2) {
      const charDots = triple.join(" ");
      const char = reversedMap[charDots];
      result.push(char);
      triple = [];
    }
  });

  return result.join("");
}
