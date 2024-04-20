export function Mormons(
  startNum: number,
  reach: number,
  target: number
): number {
  let numMissions = 0;

  while (startNum < target) {
    startNum += startNum * reach;
    numMissions++;
  }

  return numMissions;
}
