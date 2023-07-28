export function growingPlant(
  up: number,
  down: number,
  desiredHeight: number
): number {
  // loop until currentHeight is desiredHeight
  // in every loop
  // increase height
  // check if height is reached, if yes stop
  // and return the current days number
  // else decrease height and go on

  let currentHeight = 0;

  for (let day = 1; ; day++) {
    currentHeight += up;
    if (currentHeight >= desiredHeight) return day;
    currentHeight -= down;
  }
}
