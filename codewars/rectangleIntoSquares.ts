export const sqInRect = (l: number, w: number): null | number[] => {
  if (l === w) return null;

  const output: number[] = [];
  let restLength = l;
  let restWidth = w;

  while (restLength || restWidth) {
    if (restLength === restWidth) {
      output.push(restLength);
      break;
    }

    const longSide = Math.max(restLength, restWidth);
    const shortSide = Math.min(restLength, restWidth);

    output.push(shortSide);

    restLength = longSide - shortSide;
    restWidth = shortSide;
  }

  return output;
};
