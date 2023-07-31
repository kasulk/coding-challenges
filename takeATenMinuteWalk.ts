export function isValidWalk(walk: string[]): boolean {
  // if walk.length isn't 10, return false
  // create a counter each for the vertical and horizontal directions
  // loop through array
  // if direction is n, increase vertical by 1, if s decrease is
  // if direction is w, increase horizontal by 1, if e decrease is
  // if one of the direction counters isn't 0 at the end, return false, else true

  if (walk.length !== 10) return false;

  let verticalCount = 0;
  let horizontalCount = 0;

  for (let direction of walk) {
    switch (direction) {
      case "n":
        verticalCount++;
        break;
      case "s":
        verticalCount--;
        break;
      case "w":
        horizontalCount++;
        break;
      case "e":
        horizontalCount--;
        break;
    }
  }

  return verticalCount === 0 && horizontalCount === 0;
}
