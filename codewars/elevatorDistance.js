function elevatorDistance(floors) {
  return floors.reduce((acc, curr, i) => {
    const prev = floors[i - 1];
    return i ? acc + Math.abs(curr - prev) : acc;
  }, 0);
}
