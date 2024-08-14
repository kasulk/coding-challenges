export function score(dice: number[]): number {
  const diceValueCounts = getDiceValueCounts(dice);
  let score = 0;

  Object.entries(diceValueCounts).forEach(([key, val]) => {
    const dieValue = Number(key);
    const numValues = Number(val);
    let numValuesRest = numValues;

    const isOne = dieValue === 1;
    const isOneOrFive = isOne || dieValue === 5;

    const multiplier = isOne ? 10 : 1;

    if (numValues >= 3) {
      if (isOneOrFive) numValuesRest = numValues - 3;
      score += dieValue * multiplier * 100;
    }

    if (isOneOrFive) {
      score += dieValue * multiplier * 10 * numValuesRest;
    }
  });

  return score;
}

function getDiceValueCounts(dice: number[]): { [key: number]: number } {
  const diceValueCounts: { [key: number]: number } = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };

  dice.forEach((die) => die >= 1 && die <= 6 && diceValueCounts[die]++);

  return diceValueCounts;
}
