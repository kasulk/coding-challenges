export function waterbombs(fire: string, w: number): number {
  // create array of input split by 'Y'
  // loop through array
  // divide every elements length by w
  // round the result up
  // add to total
  // return total

  let totalWaterbombs = 0;

  fire
    .split("Y")
    .forEach(
      (sectionOfFire) =>
        (totalWaterbombs += Math.ceil(sectionOfFire.length / w))
    );

  return totalWaterbombs;
}
