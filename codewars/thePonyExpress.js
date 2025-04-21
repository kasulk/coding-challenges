function riders(stationDists) {
  let numRiders = 1;
  let currRiderDist = 0;

  for (const currDist of stationDists) {
    const nextDist = currRiderDist + currDist;
    if (nextDist > 100) {
      numRiders++;
      currRiderDist = currDist;
    } else currRiderDist += currDist;
  }

  return numRiders;
}
