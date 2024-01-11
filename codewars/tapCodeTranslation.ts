export function tapCodeTranslation(word: string): string {
  const letterTapCodes: { [key: string]: string } = {
    A: ". .",
    B: ". ..",
    C: ". ...",
    D: ". ....",
    E: ". .....",
    F: ".. .",
    G: ".. ..",
    H: ".. ...",
    I: ".. ....",
    J: ".. .....",
    K: ". ...",
    L: "... .",
    M: "... ..",
    N: "... ...",
    O: "... ....",
    P: "... .....",
    Q: ".... .",
    R: ".... ..",
    S: ".... ...",
    T: ".... ....",
    U: ".... .....",
    V: "..... .",
    W: "..... ..",
    X: "..... ...",
    Y: "..... ....",
    Z: "..... .....",
  };

  return word
    .split("")
    .map((letter) => letterTapCodes[letter.toUpperCase()])
    .join(" ");
}
