export const mxdiflg = (a1: string[], a2: string[]): number => {
  if (!a1.length || !a2.length) return -1;

  const elementsLengthsA1 = a1.map((element) => element.length);
  const elementsLengthsA2 = a2.map((element) => element.length);

  const maxA1 = Math.max(...elementsLengthsA1);
  const maxA2 = Math.max(...elementsLengthsA2);
  const minA1 = Math.min(...elementsLengthsA1);
  const minA2 = Math.min(...elementsLengthsA2);

  return Math.max(Math.abs(maxA1 - minA2), Math.abs(maxA2 - minA1));
};
