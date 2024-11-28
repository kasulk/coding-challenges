export function alphabetPosition(text: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return text
    .toLowerCase()
    .split("")
    .reduce((acc, curr) => {
      const position = alphabet.indexOf(curr) + 1;
      return alphabet.includes(curr) ? [...acc, position] : acc;
    }, [] as number[])
    .join(" ");
}
