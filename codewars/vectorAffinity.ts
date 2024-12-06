export function vectorAffinity(
  vec1: (number | null)[],
  vec2: (number | null)[]
): number {
  const maxLen = vec1.length > vec2.length ? vec1.length : vec2.length;

  const sameValueCount = vec1.reduce((acc: number, _, i) => {
    return vec1[i] === vec2[i] ? acc + 1 : acc;
  }, 0);

  return maxLen ? sameValueCount / maxLen : 1;
}
