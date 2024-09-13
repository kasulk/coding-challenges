export function trafficLights(road: string, n: number): string[] {
  console.log("n:", n);

  let result: string[] = [road];
  let currRoad = road.split("");
  let newRoad: string[] = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < currRoad.length; j++) {
      const prevCell = currRoad[j - 1];
      const currCell = currRoad[j];
      let updatedTrafficLight: string;

      const isCurrTrafficLight = "GOR".includes(road[j]);
      const isNextTrafficLight = "GOR".includes(road[j + 1]);

      if (isCurrTrafficLight) {
        updatedTrafficLight = updateTrafficLight(road[j], i) || "";
        if (prevCell === "C" && updatedTrafficLight === "G") newRoad.push("C");
        else newRoad.push(updatedTrafficLight);
        continue;
      }

      if (currCell === ".") {
        if (prevCell === "C") newRoad.push("C");
        else newRoad.push(".");
      }

      if (currCell === "C") {
        if (isNextTrafficLight) {
          updatedTrafficLight = updateTrafficLight(road[j + 1], i) || "";
          if (updatedTrafficLight === "G") newRoad.push(".");
          else newRoad.push("C");
          continue;
        }

        if (isCurrTrafficLight) newRoad.push("G");
        else newRoad.push(".");
      }
    }

    currRoad = newRoad;
    newRoad = [];
    result.push(currRoad.join(""));
  }

  return result;
}

function updateTrafficLight(initialStatus: string, n: number): string | void {
  if (initialStatus === "R") {
    if (n % 11 < 5) return "R";
    if (n % 11 < 10) return "G";
    return "O";
  }

  if (initialStatus === "G") {
    if (n % 11 < 5) return "G";
    if (n % 11 === 5) return "O";
    return "R";
  }
}
