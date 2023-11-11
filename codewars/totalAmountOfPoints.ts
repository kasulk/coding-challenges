export function points(games: string[]): number {
  return games.reduce((sum, curr) => {
    if (curr[0] > curr[2]) return (sum += 3);
    if (curr[0] < curr[2]) return sum;
    return (sum += 1);
  }, 0);
}
