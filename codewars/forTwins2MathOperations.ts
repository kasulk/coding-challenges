export const iceBrickVolume = (
  radius: number,
  bottleLength: number,
  rimLength: number
): number => {
  const brickLength = Math.sqrt(radius ** 2 + radius ** 2); // c^2 = a^2 + b^2
  const brickHeight = bottleLength - rimLength;

  return Math.round(brickLength * brickLength * brickHeight);
};
