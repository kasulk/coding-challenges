export function howMuch(m: number, n: number): string[][] {
  const [min, max] = [m, n].sort((a, b) => a - b);
  const result: string[][] = [];

  for (let i = min; i <= max; i++) {
    const allBoatsValue = i - 2;
    const allCarsValue = i - 1;

    if (allBoatsValue % 7 === 0 && allCarsValue % 9 === 0) {
      const money = i;
      const costBoat = allBoatsValue / 7;
      const costCar = allCarsValue / 9;

      result.push([`M: ${money}`, `B: ${costBoat}`, `C: ${costCar}`]);
    }
  }

  return result;
}
