export function updateLight(current: string): string {
  const trafficLight: { [key: string]: string } = {
    red: "green",
    yellow: "red",
    green: "yellow",
  };

  return trafficLight[current];
}
