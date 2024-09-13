export function trafficLights(road: string, n: number): string[] {
  console.log("n:", n);

  let result: string[] = [road];
  let currRoad = road.split("");

  for (let i = 1; i <= n; i++) {
    const roadWithUpdatedTrafficLights = updateTrafficLights(road, i)
      .replace("C", ".")
      .split("");

    const nextRoad = [...roadWithUpdatedTrafficLights];
    const carPosition = currRoad.indexOf("C");
    const nextCell = roadWithUpdatedTrafficLights[carPosition + 1];

    if (carPosition < 0) {
      result.push(nextRoad.join(""));
      continue;
    }

    if (nextCell === "R" || nextCell === "O") {
      nextRoad[carPosition] = "C";
      result.push(nextRoad.join(""));
      continue;
    }

    if (nextCell === "." || nextCell === "G") {
      const isIntersection = "GOR".includes(road[carPosition]);
      nextRoad[carPosition] = ".";
      nextRoad[carPosition + 1] = "C";

      if (isIntersection) {
        nextRoad[carPosition] = roadWithUpdatedTrafficLights[carPosition];
      }
    }

    result.push(nextRoad.join(""));
    currRoad = [...nextRoad];
  }

  return result;
}

function updateTrafficLight(initialColor: string, n: number): string {
  if (initialColor === "R") {
    if (n % 11 < 5) return "R";
    if (n % 11 < 10) return "G";
    return "O";
  }

  if (initialColor === "G") {
    if (n % 11 < 5) return "G";
    if (n % 11 === 5) return "O";
    return "R";
  }

  return "";
}

function updateTrafficLights(initialRoad: string, n: number): string {
  return initialRoad.replace(/[GOR]/g, (v) => updateTrafficLight(v, n));
}
