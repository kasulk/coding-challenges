const map: { [key: string]: string } = {
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
  const chars: string[] = [];
  let triple: string[] = [];

  str.split(" ").forEach((dots, i) => {
    triple.push(dots);

    if (i % 3 === 2) {
      const charDots = triple.join(" ");
      const char = reversedMap[charDots];
      chars.push(char);
      triple = [];
    }
  });

  return chars.join("");
}
