export function rank(namesStr: string, weights: number[], n: number): string {
  const names = namesStr.split(",");

  if (!namesStr) return "No participants";
  if (n > names.length) return "Not enough participants";

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const namesWithPoints = names.map((name, i) => {
    const letters = [...name];
    const lettersSum = letters.reduce(
      (sum, currLetter) => sum + alphabet.indexOf(currLetter.toLowerCase()) + 1,
      0
    );

    const winNum = (lettersSum + name.length) * weights[i];

    return { name, winNum };
  });

  const sortedNamesWithPoints = namesWithPoints.sort((a, b) => {
    if (b.winNum !== a.winNum) return b.winNum - a.winNum;
    return a.name.localeCompare(b.name);
  });

  return sortedNamesWithPoints[n - 1].name;
}
