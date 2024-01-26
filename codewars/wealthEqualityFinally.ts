export function redistributeWealth(wealth: number[]): void {
  const numCitizens = wealth.length;
  const equalWealth = wealth.reduce((sum, num) => sum + num, 0) / numCitizens;

  wealth.fill(equalWealth);
}
