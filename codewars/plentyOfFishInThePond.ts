export function fish(shoal: string): number {
  const sortedShoal = [...shoal].map(Number).sort();

  let sizeUpAmount = 0;
  let size = 1;

  for (let fish of sortedShoal) {
    if (fish > size) return size;

    sizeUpAmount += fish;

    if (sizeUpAmount / size >= 4) {
      sizeUpAmount %= 4;
      size++;
    }
  }

  return size;
}
