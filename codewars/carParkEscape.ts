export function escape(carpark: number[][]): string[] {
  const directions: string[] = [];
  const exitPos = carpark[0].length - 1;
  let startLevelNum: number | undefined;
  let verticalDist = 1;
  let currPos: number | undefined;

  for (let i = 0; i < carpark.length; i++) {
    const currLevelNum = carpark.length - 1 - i;
    const currLevel = carpark[i];
    let isStartLevel = false;

    if (!startLevelNum && currLevel.includes(2)) {
      currPos = currLevel.indexOf(2);
      startLevelNum = currLevelNum;
      isStartLevel = true;
    }

    if (currPos === undefined) continue;

    const isLastLevel = !currLevelNum;
    const staircasePos = currLevel.includes(1) ? currLevel.indexOf(1) : exitPos;
    const distance = currPos - staircasePos;

    currPos = staircasePos;

    if (!distance && !isLastLevel) {
      verticalDist++;
      continue;
    }

    if (!isStartLevel) {
      directions.push("D" + verticalDist);
      verticalDist = 1;
    }

    if (distance) {
      const currRoute = (distance > 0 ? "L" : "R") + Math.abs(distance);
      directions.push(currRoute);
    }
  }

  return directions;
}
