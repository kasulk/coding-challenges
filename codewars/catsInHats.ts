export function height(numCats: number): string {
  const catInTheHatHeight = 2000000;
  let numCatsLeft = numCats;
  let currCatHeight = catInTheHatHeight;
  let heightSum = catInTheHatHeight;

  while (numCatsLeft) {
    currCatHeight = currCatHeight / 2.5;
    heightSum += currCatHeight;
    numCatsLeft--;
  }

  return heightSum.toFixed(3);
}
