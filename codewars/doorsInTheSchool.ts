export function doors(n: number): number {
  const doors: ("closed" | "open")[] = Array(n).fill("closed");

  let pupilNum = 1;
  let doorNum = 0;

  while (pupilNum <= doors.length) {
    while (doorNum < n - pupilNum + 1) {
      doorNum += pupilNum;
      doors[doorNum - 1] = doors[doorNum - 1] === "closed" ? "open" : "closed";
    }

    doorNum = 0;
    pupilNum++;
  }

  return doors.filter((door) => door === "open").length;
}
