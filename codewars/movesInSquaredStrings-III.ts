export function rot90Clock(strng: string): string {}

export function diag1Sym(str: string): string {
  const result: string[] = ["", "", "", ""];
  const words = str.split("\n");

  words.forEach((word) =>
    word.split("").forEach((char, i) => (result[i] += char))
  );

  return result.join("\n");
}

export function selfieAndDiag1(strng: string): string {}

export function oper(fct: (s: string) => string, s: string): string {}
