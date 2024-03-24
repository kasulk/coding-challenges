export function howMuch(m: number, n: number): string[][] {
  const [min, max] = [m, n].sort((a, b) => a - b);
  console.log("min,max:", min, max);
  if (min === max) return [];

  const result: string[][] = [];
  let money: number;
  let start = 1;
  const end = Math.trunc(max / 7);

  for (let i = min - 2; ; i++) {
    if (i % 7 === 0) {
      start = i / 7;
      break;
    }
  }

  console.log("start, end:", start, end);

  for (let i = start; i <= end; i++) {
    money = 7 * i + 2;
    console.log(i, money);

    if (money % 9 === 1 && money <= max) {
      const boatPrice = i;
      const carPrice = (money - 1) / 9;

      result.push([`M: ${money}`, `B: ${boatPrice}`, `C: ${carPrice}`]);
    }
  }

  console.log("result:", result);

  return result;
}
