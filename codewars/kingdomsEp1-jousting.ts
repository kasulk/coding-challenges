export function joust(
  field: string[],
  vKnightLeft: number,
  vKnightRight: number
): string[] {
  if (!vKnightLeft && !vKnightRight) return field;

  let [tipPosKnightLeft, tipPosKnightRight] = getTipPositions(field);
  let fieldUpdated = [...field];

  while (tipPosKnightLeft < tipPosKnightRight) {
    fieldUpdated = moveKnights(fieldUpdated, vKnightLeft, vKnightRight);
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

function moveKnights(
  field: string[],
  vKnightLeft: number,
  vKnightRight: number
): string[] {
  return field.map((knight, i) => {
    let steps = "";

    if (!i) {
      steps = " ".repeat(vKnightLeft) || "0";
      if (knight.endsWith(steps)) {
        return steps + knight.slice(0, -vKnightLeft);
      }
    } else {
      steps = " ".repeat(vKnightRight) || "0";
      if (knight.startsWith(steps)) {
        return knight.slice(vKnightRight) + steps;
      }
    }

    return knight;
  });
}
