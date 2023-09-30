export function number(busStops: [number, number][]): number {
  // create a variable for the current people on the bus
  // loop through the elements of the outer array
  // for every element,
  // add the first element to the people on the bus and
  // subtract the second element from the people on the bus
  // after the loop, return the value of the variable

  let currentPeopleOnTheBus = 0;

  for (let busStop of busStops) {
    currentPeopleOnTheBus += busStop[0] - busStop[1];
  }

  return currentPeopleOnTheBus;
}
