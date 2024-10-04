export function escape(carpark: number[][]): string[] {
  let result: string[] = [];
  let currPos: number | undefined;
  let currRoute = "";
  let startLevelNum: number | undefined;
  let verticalDist = 1;
  const exitPos = carpark[0].length - 1;

  for (let i = 0; i < carpark.length; i++) {
    const currLevel = carpark[i];
    const currLevelNum = carpark.length - 1 - i;

    if (currLevel.includes(2)) {
      currPos = currLevel.indexOf(2);
      startLevelNum = currLevelNum;
    }

    if (currPos === undefined) continue;

    const isLastLevel = !currLevelNum;
    const staircasePos = currLevel.includes(1) ? currLevel.indexOf(1) : exitPos;
    const distance = currPos - staircasePos;

    currPos = staircasePos;

    if (!distance) {
      if (!isLastLevel) {
        verticalDist++;
        continue;
      }
    }

    // no D's on first position
    if (currLevelNum !== startLevelNum) {
      result.push("D" + verticalDist);
      verticalDist = 1;
    }

    if (distance) {
      currRoute = (distance > 0 ? "L" : "R") + Math.abs(distance);
      result.push(currRoute);
    }
  }

  return result;
}
