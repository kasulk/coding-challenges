export function getFreeUrinals(urinals: string): number {
  // for each urinal,
  // check if current, next and previous are free
  // if yes, increase a counter by 1
  // and set the current (aka the next iterations previous) to 1

  if (urinals.includes("11")) return -1;

  let numFreeUrinals = 0;
  let last: number | null = null;

  for (let i = 0; i < urinals.length; i++) {
    const curr = Number(urinals[i]);
    const next = Number(urinals[i + 1] || 0);

    if (last || curr || next) {
      last = curr;
      continue;
    }

    numFreeUrinals++;
    last = 1;
  }

  return numFreeUrinals;
}
