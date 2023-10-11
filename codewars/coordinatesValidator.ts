export function isValidCoordinates(coordinates: string): boolean {
  // convert the input string into an array with the 2 coords as elements
  // convert the strings into numbers
  // if the absolute value of the first element <= 90 and
  // the absolute value of the second element <= 180
  // return true, else false

  const coordsArr = coordinates
    .split(",")
    .filter((element) => element) // remove empty (falsy) elements
    .map(Number);

  if (Math.abs(coordsArr[0]) <= 90 && Math.abs(coordsArr[1]) <= 180)
    return true;

  return false;
}
