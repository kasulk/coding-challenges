export function joust(
  fieldStart: string[],
  vKnightLeft: number,
  vKnightRight: number
): string[] {
  let [tipPosKnightLeft, tipPosKnightRight] = getTipPositions(fieldStart);
  let fieldUpdated = [...fieldStart];

  while (tipPosKnightLeft < tipPosKnightRight) {
    if (!vKnightLeft && !vKnightRight) break;
    fieldUpdated = fieldUpdated.map((knight, i) => {
      let steps = "";

      if (!i) {
        steps = " ".repeat(vKnightLeft);
        if (knight.endsWith(steps || "x"))
          return steps + knight.slice(0, -vKnightLeft);
      }

      steps = " ".repeat(vKnightRight);
      if (knight.startsWith(steps || "x"))
        return knight.slice(vKnightRight) + steps;

      return knight;
    });

    [tipPosKnightLeft, tipPosKnightRight] = getTipPositions(fieldUpdated);
  }

  return fieldUpdated;
}

function getTipPositions(field: string[]): [number, number] {
  const [knightLeft, knightRight] = field;
  const tipPosKnightLeft = knightLeft.indexOf(">");
  const tipPosKnightRight = knightRight.indexOf("<");
  return [tipPosKnightLeft, tipPosKnightRight];
}
