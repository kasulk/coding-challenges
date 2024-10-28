type Coords = [number, number];
type Fighters = string[][];

export function superStreetFighterSelection(
  fighters: Fighters,
  position: Coords,
  moves: string[]
): string[] {
  const sequence: string[] = [];
  let currCoords: Coords = [...position];
  const firstCol = 0;
  const lastCol = fighters[0].length - 1;
  const firstRow = 0;
  const lastRow = fighters.length - 1;

  for (const move of moves) {
    let [x, y] = currCoords;
    let fighter = "";

    if (move === "left") {
      while (!fighter) {
        y--;
        if (y < firstCol) y = lastCol;
        currCoords = [x, y];
        fighter = getFighterFromCoords(currCoords, fighters);
      }
    }
    if (move === "right") {
      while (!fighter) {
        y++;
        if (y > lastCol) y = firstCol;
        currCoords = [x, y];
        fighter = getFighterFromCoords(currCoords, fighters);
      }
    }
    if (move === "up") {
      while (!fighter) {
        let prevCoords: Coords = [...currCoords];
        x--;
        if (x < firstRow) x = firstRow;
        currCoords = [x, y];
        fighter = getFighterFromCoords(currCoords, fighters);

        if (!fighter) {
          fighter = getFighterFromCoords(prevCoords, fighters);
          currCoords = [...prevCoords];
        }
      }
    }
    if (move === "down") {
      while (!fighter) {
        let prevCoords: Coords = [...currCoords];
        x++;
        if (x > lastRow) x = lastRow;
        currCoords = [x, y];
        fighter = getFighterFromCoords(currCoords, fighters);

        if (!fighter) {
          fighter = getFighterFromCoords(prevCoords, fighters);
          currCoords = [...prevCoords];
        }
      }
    }

    sequence.push(fighter);
  }

  return sequence;
}

function getFighterFromCoords(coords: Coords, fighters: Fighters): string {
  const [x, y] = coords;
  return fighters[x][y];
}
