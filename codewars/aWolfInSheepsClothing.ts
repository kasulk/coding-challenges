export function warnTheSheep(queue: string[]): string {
  const posWolf = queue.indexOf("wolf");

  if (posWolf === queue.length - 1)
    return "Pls go away and stop eating my sheep";

  return `Oi! Sheep number ${
    queue.length - 1 - posWolf
  }! You are about to be eaten by a wolf!`;
}
