export const gps = (seconds: number, distances: number[]): number => {
  // if distances length <= 1, return 0
  // loop through elements of measured distances
  // for every element,
  // calculate the distance from the last measure
  // and calculate the hourly speed: (3600 * distance) / s
  // and add it to an array
  // after the loop
  // return the maximum hourly speed rounded down

  if (distances.length <= 1) return 0;

  const speeds: number[] = [];

  for (let i = 1; i < distances.length; i++) {
    const distance = distances[i] - distances[i - 1];

    const speed = (3600 * distance) / seconds;

    speeds.push(speed);
  }

  return Math.floor(Math.max(...speeds));
};
