export function isIsogram(str: string): boolean {
  const characters = str.toLowerCase().split("");

  for (let char of characters) {
    if (characters.indexOf(char) !== characters.lastIndexOf(char)) return false;
  }
  return true;
}
