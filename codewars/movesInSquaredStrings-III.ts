export function rot90Clock(str: string): string {
  return diag1Sym(str)
    .split("\n")
    .map((word) => word.split("").reverse().join(""))
    .join("\n");
}

export function diag1Sym(str: string): string {
  const result: string[] = [];
  const words = str.split("\n");
  words.forEach((word) => result.push(""));

  words.forEach((word) =>
    word.split("").forEach((char, i) => (result[i] += char))
  );

  return result.join("\n");
}

export function selfieAndDiag1(str: string): string {
  const diagWords = diag1Sym(str).split("\n");

  return str
    .split("\n")
    .map((word, i) => `${word}|${diagWords[i]}`)
    .join("\n");
}

export function oper(fct: (str: string) => string, str: string): string {
  return fct(str);
}
