export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  // filter valid sheeps

  return arrayOfSheep.filter((sheep) => sheep).length;
}
