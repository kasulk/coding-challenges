export function theVar(theVariables: string): number {
  const alphabet = "_abcdefghijklmnopqrstuvwxyz";
  const [x, y] = theVariables.split("+");

  return alphabet.indexOf(x) + alphabet.indexOf(y);
}
