export function findUniq(strs: string[]): string | null {
  const similar: string = getSimilarUniquified(strs);

  for (const str of strs) {
    if (uniquify(str) !== similar) return str;
  }

  return null;
}

function getSimilarUniquified(strs: string[]): string {
  const [first, second, third] = strs.slice(0, 3).map((str) => uniquify(str));
  return first === second ? first : third;
}

function uniquify(str: string): string {
  const strLow = str.toLowerCase();
  return [...new Set(strLow)].sort().join("");
}
