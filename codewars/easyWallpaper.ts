export function wallpaper(l: number, w: number, h: number): string {
  if (l * w * h === 0) return "zero";

  const wallpaperRollLength = 10;
  const wallpaperRollWidth = 0.52;
  const wallpaperRollArea = wallpaperRollWidth * wallpaperRollLength;
  const wallArea = 2 * h * (w + l);
  const sparePercentage = 15;

  const numRollsNeeded = Math.ceil(
    (1 + sparePercentage / 100) * (wallArea / wallpaperRollArea)
  );

  return numbers[numRollsNeeded];
}

const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
];
