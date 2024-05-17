export function doors(numDoors: number): number {
  const doors: ("closed" | "open")[] = Array(numDoors).fill("closed");

  let pupil = 1;

  while (pupil <= numDoors) {
    let door = 0;

    // change every door that is a multiple of pupil
    while (door <= numDoors - pupil) {
      door += pupil;
      const doorIndex = door - 1;

      doors[doorIndex] = doors[doorIndex] === "closed" ? "open" : "closed";
    }

    pupil++;
  }

  return doors.filter((door) => door === "open").length;
}
