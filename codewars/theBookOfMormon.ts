export function Mormons(
  startNum: number,
  reach: number,
  target: number
): number {
  let newStartNum = startNum;
  let numMissions = 0;

  while (newStartNum < target) {
    newStartNum = newStartNum + newStartNum * reach;
    numMissions++;
  }

  return numMissions;
}
