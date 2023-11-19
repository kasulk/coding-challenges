export function feast(beast: string, dish: string): boolean {
  return dish.startsWith(beast[0]) && dish.endsWith(beast.slice(-1));
}
