export function save(fileSizes: number[], hdCapacity: number): number {
  // loop through fileSizes
  // if adding a fileSize would exceed disk capacity
  // return numFiles
  // else increase file counter by 1

  let consumedSpace = 0;
  let numFiles = 0;

  for (let fileSize of fileSizes) {
    if (consumedSpace + fileSize > hdCapacity) return numFiles;

    consumedSpace += fileSize;
    numFiles++;
  }

  return numFiles;
}
