export const towerBuilder = (nFloors: number): string[] => {
  // create output array
  // loop through nFloors
  // for every iteration
  // push: nFloor-i spaces + i+i-1 stars + nFloor-i spaces
  // return output

  const output: string[] = [];

  for (let i = 1; i <= nFloors; i++) {
    let spaces = " ".repeat(nFloors - i);
    let stars = "*".repeat(i + i - 1);

    output.push(spaces + stars + spaces);
  }

  return output;
};
