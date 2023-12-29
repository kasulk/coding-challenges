export function unflatten(flatArray: number[]): number[] | number[][] {
  const output: any[] = [];

  for (let i = 0; i < flatArray.length; i++) {
    const curr = flatArray[i];

    if (curr < 3) output.push(curr);

    if (curr > 2) {
      const subArray: number[] = [];

      for (let j = 0; j < curr; j++) {
        const subCurr = flatArray[j + i];
        if (subCurr) subArray.push(subCurr);
      }

      output.push(subArray);
      i += curr - 1;
    }
  }

  return output;
}
